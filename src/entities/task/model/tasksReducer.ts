import type { ITask } from '@/shared/types/task.types.ts';
import { type TActionTask } from '@/entities/task/model/types.ts';

export function tasksReducer(tasks: ITask[], action: TActionTask) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...tasks, { ...action.payload }];
    case 'DELETE_TASK':
      return tasks.filter((task) => task.id !== action.payload.id);
    case 'UPDATE_TASK': {
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    }
    default: {
      return tasks;
    }
  }
}
