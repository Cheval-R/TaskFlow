import Task from '../../entities/task/ui/Task'
import ss from './Day.module.scss'
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts'
import CreateTaskModal from '@/features/create-task-modal/ui/CreateTaskModal'
import { useRef, useState } from 'react'
import {
  useTasksContext,
  useTasksDispatchContext,
} from '@/entities/task/model/TasksContext.ts'
import useTasks from '@/entities/task/model/useTasks.ts'
import useStyleTokens from '@/shared/libs/useStyleTokens.ts'

interface Props {}

export const Day = ({}: Props) => {
  const tasks = useTasksContext()
  const { halfSize } = useStyleTokens()
  const { addTaskHandler, deleteTaskHandler, updateTaskHandler } = useTasks()
  const workspaceRef = useRef(null)

  const {
    isOpen,
    toggleCreateTaskModal,
    openCreateTaskModal,
    closeCreateTaskModal,
  } = useCreateTaskModal()
  const [clickCoordinateY, setClickCoordinateY] = useState<number>(0)

  return (
    <div
      ref={workspaceRef}
      className={ss.dayWorkspace}
      onClick={(e) => {
        if (e.target === workspaceRef.current) {
          const startCoordinate =
            Math.floor(e.nativeEvent.offsetY / halfSize) * halfSize
          setClickCoordinateY(startCoordinate)
          toggleCreateTaskModal()
        }
      }}
    >
      {tasks.map((task) => {
        console.log(task)
        return <Task key={task.id} {...task} />
      })}
      {isOpen ? (
        <CreateTaskModal
          yCoordinate={clickCoordinateY}
          toClose={closeCreateTaskModal}
        />
      ) : null}
    </div>
  )
}
