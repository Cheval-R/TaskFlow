import { useContext } from 'react';
import dayjs from 'dayjs';
import { CreateTaskModalContext } from '@/features/create-task-modal/model/CreateTaskModalContext.tsx';
import type { ITask } from '@/shared/types/task.types.ts';

export function useCreateTaskModal() {
  const context = useContext(CreateTaskModalContext);

  if (!context) {
    throw Error('useCreateTaskModal должен использоваться внутри TaskProvider');
  }

  const { isOpen, values, setter } = context;

  const closeCreateTaskModal = () => {
    setter((prevState) => ({
      values: prevState.values,
      isOpen: false,
    }));
  };

  const openCreateTaskModal = ({
    label,
    description,
    tagValue,
    date,
    timeRange,
    id,
  }: Partial<ITask>) => {
    const formValues = {
      label: label || '',
      description: description || '',
      tagValue: tagValue || '',
      id: id || '',
      date: date || dayjs(),
      timeRange: timeRange || [dayjs(), dayjs()],
    };
    setter({ values: formValues, isOpen: true });
    console.log('asdasdadasdasd');
  };

  return {
    openCreateTaskModal,
    closeCreateTaskModal,
    isCreateModalOpen: isOpen,
    createTaskFormValues: values,
  };
}
