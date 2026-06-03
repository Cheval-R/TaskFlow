import { createContext, useContext } from 'react'
import type { ICreateTaskModalContext } from '@/features/create-task-modal/types/createTaskModal.types.ts'

export const CreateTaskModalContext =
  createContext<ICreateTaskModalContext | null>(null)

export const useCreateTaskModalContext = () => {
  const createTaskModalContext = useContext(CreateTaskModalContext)
  if (createTaskModalContext === null)
    throw Error('CreateTaskModal out of context')
  return createTaskModalContext
}
