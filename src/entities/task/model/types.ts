import type { ITask } from '@/shared/types/task.types.ts';
import type { Dispatch } from 'react';

export type TActionTask =
  | { type: 'ADD_TASK'; payload: ITask }
  | { type: 'DELETE_TASK'; payload: { id: string } }
  | { type: 'UPDATE_TASK'; payload: ITask };

export interface ITaskLayout extends ITask {
  leftPosition: number;
  columnWidth: number;
  columnIndex: number;
}

export interface ITasksContext {
  tasks: ITask[];
  dispatch: Dispatch<TActionTask>;
}
