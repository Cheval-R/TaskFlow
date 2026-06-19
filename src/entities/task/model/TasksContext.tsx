import type { ITask } from '@/shared/types/task.types'
import {
  type ActionDispatch,
  createContext,
  type ReactNode,
  useContext,
  useReducer,
} from 'react'
import type { TActionTask } from '@/entities/task/model/types.ts'
import { tasksReducer } from '@/entities/task/model/tasksReducer.ts'
import { mockTasks } from '@/entities/task/model/mockTasks.ts'

export interface ITasksContext {
  tasks: ITask[]
  dispatch: ActionDispatch<[action: TActionTask]>
}

export const TasksContext = createContext<ITasksContext | null>(null)

export const useTasksContext = () => {
  const tasks = useContext(TasksContext)
  if (tasks === null) throw Error('Tasks out of context')
  return tasks
}

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, mockTasks)

  return <TasksContext value={{ tasks, dispatch }}>{children}</TasksContext>
}

export function useTasks() {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error('useTasks должен использоваться внутри TasksProvider')
  }
  return context
}
