import { type ReactNode } from 'react';
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts';
import antdTheme from '@/shared/styles/antd-theme.ts';
import { CreateTaskModalContext } from '@/features/create-task-modal/model/createTaskModalContext.ts';
import { TagsProvider } from '../../../entities/tag/model/TagsContext.tsx';
import { TasksProvider } from '../../../entities/task/model/TasksContext.tsx';
import { ConfigProvider } from 'antd';
import { WorkspaceProvider } from '@/entities/workspace/model/WorkspaceContext.tsx';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const {
    closeCreateTaskModal,
    openCreateTaskModal,
    isCreateModalOpen,
    toggleCreateTaskModal,
    createTaskFormValues,
  } = useCreateTaskModal();
  return (
    <ConfigProvider theme={antdTheme}>
      <WorkspaceProvider>
        <CreateTaskModalContext
          value={{
            closeCreateTaskModal,
            openCreateTaskModal,
            isCreateModalOpen,
            toggleCreateTaskModal,
            values: createTaskFormValues,
          }}
        >
          <TagsProvider>
            <TasksProvider>{children}</TasksProvider>
          </TagsProvider>
        </CreateTaskModalContext>
      </WorkspaceProvider>
    </ConfigProvider>
  );
};
