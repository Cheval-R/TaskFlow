import { createContext, type ReactNode, useState } from 'react';
import type { TTaskDetailsContext } from '@/features/task-details/model/context/types.ts';

export const TaskDetailsContext = createContext<TTaskDetailsContext>(null);

export const TaskDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTaskID, setSelectedTaskID] = useState<null | string>(null);

  function open(id: string) {
    setSelectedTaskID(id);
  }

  function close() {
    setSelectedTaskID(null);
  }

  return (
    <TaskDetailsContext
      value={{
        selectedTaskID,
        closeTaskDetails: close,
        openTaskDetails: open,
      }}
    >
      {children}
    </TaskDetailsContext>
  );
};
