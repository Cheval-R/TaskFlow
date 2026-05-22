import type { ITask } from '@/shared/types/task.types.ts'
import { useTasksDispatchContext } from '@/entities/task/model/TasksContext.ts'
import { EActionPoints } from '@/entities/task/model/types.ts'

export default function useTasks() {
  const dispatch = useTasksDispatchContext()

  const addTaskHandler = (task: ITask) => {
    dispatch({
      type: EActionPoints.ADD_TASK,
      payload: { ...task },
    })
  }

  const deleteTaskHandler = (id: string) => {
    dispatch({
      type: EActionPoints.DELETE_TASK,
      payload: { id },
    })
  }

  const updateTaskHandler = (task: ITask) => {
    console.log(task)
    dispatch({
      type: EActionPoints.UPDATE_TASK,
      payload: { ...task },
    })
  }

  return { addTaskHandler, deleteTaskHandler, updateTaskHandler }
}
