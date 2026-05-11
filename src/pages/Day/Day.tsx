import Task from '@/features/tasks/ui/Task'
import ss from './Day.module.scss'
import { useTasks } from '@/features/tasks/model/useTasks.ts'
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts'
import CreateTaskModal from '@/features/create-task-modal/ui/CreateTaskModal'
import { useEffect, useRef, useState } from 'react'
import { tasks } from '@/features/tasks/model/tasksData.ts'

interface Props {}

export const Day = ({}: Props) => {
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
          const startCoordinate = Math.round(e.nativeEvent.offsetY / 32) * 32
          setClickCoordinateY(startCoordinate)
          toggleCreateTaskModal()
        }
      }}
    >
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}

      {/*<CreateTaskModal*/}
      {/*  yCoordinate={clickCoordinateY}*/}
      {/*  toClose={closeCreateTaskModal}*/}
      {/*/>*/}
    </div>
  )
}
