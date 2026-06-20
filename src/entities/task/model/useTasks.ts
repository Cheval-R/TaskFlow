import { useContext } from 'react';
import { TasksContext } from '@/entities/task/model/TasksContext.tsx';
import type { ITask } from '@/shared/types/task.types.ts';

export interface IUseTasksReturns {
  tasks: ITask[];
  actions: {
    addTask: (task: ITask) => void;
    deleteTask: (id: string) => void;
    updateTask: (task: ITask) => void;
  };
}

export function useTasks(): IUseTasksReturns {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks должен использоваться внутри TasksProvider');
  }

  const { tasks, dispatch } = context;
  return {
    tasks,
    actions: {
      addTask: (task: ITask) => {
        dispatch({
          type: 'ADD_TASK',
          payload: { ...task },
        });
      },

      deleteTask: (id: string) => {
        dispatch({
          type: 'DELETE_TASK',
          payload: { id },
        });
      },

      updateTask: (task: ITask) => {
        dispatch({
          type: 'UPDATE_TASK',
          payload: { ...task },
        });
      },
    },
  };
}
