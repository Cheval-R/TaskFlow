import type { ITask } from '@/shared/types/task.types.ts'
import { useTasks } from './TasksContext.tsx'
import { ETasksActionPoints } from '@/entities/task/model/types.ts'

export default function useTasksActions() {
  const { dispatch } = useTasks()

  const addTaskHandler = (task: ITask) => {
    dispatch({
      type: ETasksActionPoints.ADD_TASK,
      payload: { ...task },
    })
  }

  const deleteTaskHandler = (id: string) => {
    dispatch({
      type: ETasksActionPoints.DELETE_TASK,
      payload: { id },
    })
  }

  const updateTaskHandler = (task: ITask) => {
    dispatch({
      type: ETasksActionPoints.UPDATE_TASK,
      payload: { ...task },
    })
  }

  return { addTaskHandler, deleteTaskHandler, updateTaskHandler }
}
