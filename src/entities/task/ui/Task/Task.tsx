import ss from './Task.module.scss'
import { type CSSProperties, useState } from 'react'
import Tag from '@/shared/ui/Tag'
import getTag from '@/shared/model/getTag.ts'
import type { ITask } from '@/shared/types/task.types.ts'
import { convertMinutesToPixel } from '@/shared/model/timeConvert.ts'
import { Form } from 'antd'
import CreateTaskModal from '@/features/create-task-modal/ui/CreateTaskModal'
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts'
import useTasks from '@/entities/task/model/useTasks.ts'
import dayjs from 'dayjs'
import type { ITaskLayout } from '@/entities/task/model/types.ts'
import { useCreateTaskModalContext } from '@/features/create-task-modal/model/createTaskModalContext.ts'

interface Props {
  task: ITaskLayout
}

type CSSVars = CSSProperties & Record<`--${string}`, string | number>

export const Task = ({ task }: Props) => {
  const { label, timeRange, tagValue } = task
  const tag = getTag(tagValue)

  const startTime = timeRange[0]
  const endTime = timeRange[1]

  const startPosition = convertMinutesToPixel(
    startTime.hour() * 60 + startTime.minute(),
  )

  const taskDuration = endTime.diff(startTime, 'minute')
  const taskHeight = convertMinutesToPixel(taskDuration)
  const { openCreateTaskModal } = useCreateTaskModalContext()
  const { deleteTaskHandler } = useTasks()
  return (
    <>
      <div
        onContextMenu={(e) => {
          deleteTaskHandler(e.currentTarget.id)
        }}
        onDoubleClick={(e) => {
          openCreateTaskModal({ ...task })
        }}
        id={task.id}
        className={`${ss.task}`}
        style={
          {
            '--task-color': tag.color,
            position: 'absolute',
            top: startPosition,
            left: task.leftPosition,
            height: taskHeight,
            width: task.columnWidth,
          } as CSSProperties
        }
      >
        <div className={ss.content}>
          <p className={ss.time}>
            {`${startTime.format('HH:mm')} - ${endTime.format('HH:mm')}`}
          </p>
          <h2 className={ss.label}>{label}</h2>
          <div className={ss.tag}>
            <Tag color={tag.color}>{tag.label}</Tag>
          </div>
        </div>
      </div>
    </>
  )
}
