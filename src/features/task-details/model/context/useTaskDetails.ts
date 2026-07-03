import { useContext } from 'react';
import { TaskDetailsContext } from '@/features/task-details/model/context/TaskDetailsContext.tsx';

export function useTaskDetails() {
  const context = useContext(TaskDetailsContext);

  if (!context)
    throw new Error(
      'useTaskDetails должен использоваться внутри TaskDetailsProvider',
    );

  return context;
}
