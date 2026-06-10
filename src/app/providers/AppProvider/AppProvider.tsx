import { type ReactNode, useReducer, useState } from 'react'
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts'
import { tasksReducer } from '@/entities/task/model/tasksReducer.ts'
import { mockTags } from '@/entities/tag/model/mockTags.ts'
import { mockTasks } from '@/entities/task/model/mockTasks.ts'
import { tagsReducer } from '@/entities/tag/model/tagsReducer.ts'
import antdTheme from '@/shared/styles/antd-theme.ts'
import { CreateTaskModalContext } from '@/features/create-task-modal/model/createTaskModalContext.ts'
import {
  TagsContext,
  TagsDispatchContext,
} from '@/entities/tag/model/TagsContext.ts'
import {
  TasksContext,
  TasksDispatchContext,
} from '@/entities/task/model/TasksContext.ts'
import { ConfigProvider } from 'antd'

interface Props {
  children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, mockTasks)
  const [tags, tagsDispatch] = useReducer(tagsReducer, mockTags)
  const [activeTag, setActiveTags] = useState<string[] | null>(null)

  const {
    closeCreateTaskModal,
    openCreateTaskModal,
    isCreateModalOpen,
    toggleCreateTaskModal,
    createTaskFormValues,
  } = useCreateTaskModal()
  return (
    <ConfigProvider theme={antdTheme}>
      <CreateTaskModalContext
        value={{
          closeCreateTaskModal,
          openCreateTaskModal,
          isCreateModalOpen,
          toggleCreateTaskModal,
          values: createTaskFormValues,
        }}
      >
        <TagsContext value={{ tags, activeTags: activeTag, setActiveTags }}>
          <TagsDispatchContext value={tagsDispatch}>
            <TasksContext value={tasks}>
              <TasksDispatchContext value={tasksDispatch}>
                {children}
              </TasksDispatchContext>
            </TasksContext>
          </TagsDispatchContext>
        </TagsContext>
      </CreateTaskModalContext>
    </ConfigProvider>
  )
}
