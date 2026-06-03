import type { ITask } from '@/shared/types/task.types.ts'

export enum ETasksActionPoints {
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
}

export type TActionTask =
  | { type: ETasksActionPoints.ADD_TASK; payload: ITask }
  | { type: ETasksActionPoints.DELETE_TASK; payload: { id: string } }
  | { type: ETasksActionPoints.UPDATE_TASK; payload: ITask }

export interface ITaskLayout extends ITask {
  leftPosition: number
  columnWidth: number
  columnIndex: number
}
