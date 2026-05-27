import type { ITask } from '@/shared/types/task.types'
import { createContext, type Dispatch, useContext } from 'react'
import type { TActionTask } from '@/entities/task/model/types.ts'

export const TasksContext = createContext<null | ITask[]>(null)
export const TasksDispatchContext = createContext<Dispatch<TActionTask> | null>(
  null,
)

export const useTasksContext = () => {
  const tasks = useContext(TasksContext)
  if (tasks === null) throw Error('Tasks out of context')
  return tasks
}

export const useTasksDispatchContext = () => {
  const tasksDispatch = useContext(TasksDispatchContext)
  if (tasksDispatch === null) throw Error('TasksDispatch out of context')
  return tasksDispatch
}
