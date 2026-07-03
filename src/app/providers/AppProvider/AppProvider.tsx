import { type ReactNode } from 'react';
import antdTheme from '@/shared/styles/antd-theme.ts';
import { CreateTaskModalProvider } from '@/features/create-task-modal/model/CreateTaskModalContext.tsx';
import { TagsProvider } from '@/entities/tag/model/TagsContext.tsx';
import { TasksProvider } from '@/entities/task/model/TasksContext.tsx';
import { ConfigProvider } from 'antd';
import { WorkspaceProvider } from '@/entities/workspace/model/WorkspaceContext.tsx';
import { TaskDetailsProvider } from '@/features/task-details/model/context/TaskDetailsContext.tsx';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return (
    <ConfigProvider theme={antdTheme}>
      <WorkspaceProvider>
        <CreateTaskModalProvider>
          <TagsProvider>
            <TaskDetailsProvider>
              <TasksProvider>{children}</TasksProvider>
            </TaskDetailsProvider>
          </TagsProvider>
        </CreateTaskModalProvider>
      </WorkspaceProvider>
    </ConfigProvider>
  );
};
