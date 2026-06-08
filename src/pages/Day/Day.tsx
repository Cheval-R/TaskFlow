import Task from '../../entities/task/ui/Task'
import ss from './Day.module.scss'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTasksContext } from '@/entities/task/model/TasksContext.ts'
import getStyleTokens from '../../shared/libs/getStyleTokens.ts'
import getTasksLayout from '@/entities/task/model/getTasksLayout.ts'
import type { Dayjs } from 'dayjs'
import { useCreateTaskModalContext } from '@/features/create-task-modal/model/createTaskModalContext.ts'
import {
  convertMinutesToDayjs,
  convertPixelsToMinutes,
} from '@/shared/model/timeConvert.ts'
import useTasks from '@/entities/task/model/useTasks.ts'
import { useTagsContext } from '@/entities/tag/model/TagsContext.ts'

interface Props {
  date: Dayjs
}

export const Day = ({ date }: Props) => {
  const tasks = useTasksContext()
  const { activeTag } = useTagsContext()
  const { halfSize } = getStyleTokens()
  const workspaceRef = useRef<HTMLDivElement>(null)
  const [workspaceWidth, setWorkspaceWidth] = useState<number>(0)

  const { isCreateModalOpen, openCreateTaskModal, closeCreateTaskModal } =
    useCreateTaskModalContext()
  const { deleteTaskHandler } = useTasks()

  useEffect(() => {
    const workspaceElement = workspaceRef.current
    if (!workspaceElement) return

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWorkspaceWidth(entry.contentRect.width)
      }
    })
    observer.observe(workspaceElement)
    setWorkspaceWidth(workspaceElement.clientWidth)

    return () => {
      if (workspaceElement) observer.unobserve(workspaceElement)
    }
  }, [])

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (task.date.isSame(date, 'day')) {
        if (!activeTag) return task
        if (task.tagValue === activeTag) return task
      }
    })
  }, [tasks, date, activeTag])

  const tasksWithLayout = useMemo(() => {
    if (workspaceWidth === 0) return []
    return getTasksLayout(filteredTasks, workspaceWidth)
  }, [filteredTasks, workspaceWidth, activeTag])
  return (
    <div
      ref={workspaceRef}
      className={ss.dayWorkspace}
      onClick={(e) => {
        const target = e.target
        if (!(target instanceof Element)) return

        if (
          target.closest('[data-time-zone]') &&
          isCreateModalOpen &&
          !target.closest('#createTaskForm')
        ) {
          closeCreateTaskModal()
        }
      }}
      onDoubleClick={(e) => {
        if (e.target === workspaceRef.current) {
          const startCoordinate =
            Math.floor(e.nativeEvent.offsetY / halfSize) * halfSize
          const timeStart = convertMinutesToDayjs(
            convertPixelsToMinutes(startCoordinate),
          )

          openCreateTaskModal({
            date: date,
            timeRange: [timeStart, timeStart.add(30, 'minutes')],
          })
        }
      }}
    >
      {tasksWithLayout.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTaskHandler}
            onEdit={(taskValues) => openCreateTaskModal(taskValues)}
          />
        )
      })}
    </div>
  )
}
