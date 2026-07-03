import { createContext, type ReactNode, useState } from 'react';
import type {
  TTaskDetailsContext,
  TTaskDetailsState,
} from '@/features/task-details/model/context/types.ts';

export const TaskDetailsContext = createContext<TTaskDetailsContext>(null);

export const TaskDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [taskDetailsMenu, setTaskDetailsMenu] = useState<
    NonNullable<TTaskDetailsState>
  >({
    selectedTaskID: null,
    isOpen: false,
  });

  function open(id: string) {
    setTaskDetailsMenu({ isOpen: true, selectedTaskID: id });
  }

  function close() {
    setTaskDetailsMenu({ isOpen: false, selectedTaskID: null });
  }

  return (
    <TaskDetailsContext
      value={{
        selectedTaskID: taskDetailsMenu.selectedTaskID,
        closeTaskDetails: close,
        openTaskDetails: open,
        isOpen: taskDetailsMenu.isOpen,
      }}
    >
      {children}
    </TaskDetailsContext>
  );
};
