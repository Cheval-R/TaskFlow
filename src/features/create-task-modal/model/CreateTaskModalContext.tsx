import { createContext, type ReactNode, useContext, useState } from 'react';
import type {
  ICreateTaskModalContext,
  ICreateTaskModalState,
} from '@/features/create-task-modal/types/createTaskModal.types.ts';
import dayjs, { type Dayjs } from 'dayjs';
import type { ITask } from '@/shared/types/task.types.ts';

export const CreateTaskModalContext =
  createContext<ICreateTaskModalContext | null>(null);

export const CreateTaskModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [createTaskFormValues, setCreateTaskFormValues] =
    useState<ICreateTaskModalState>({
      values: {
        label: '',
        description: '',
        date: dayjs(),
        timeRange: [dayjs(), dayjs()],
        tagValue: '',
        id: crypto.randomUUID(),
      },
      isOpen: false,
    });

  return (
    <CreateTaskModalContext
      value={{
        values: createTaskFormValues.values,
        setter: setCreateTaskFormValues,
        isOpen: createTaskFormValues.isOpen,
      }}
    >
      {children}
    </CreateTaskModalContext>
  );
};
