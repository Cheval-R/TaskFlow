import type { ITask } from '@/shared/types/task.types.ts'

export enum EActionPoints {
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
}

export type TActionTask =
  | { type: EActionPoints.ADD_TASK; payload: ITask }
  | { type: EActionPoints.DELETE_TASK; payload: { id: string } }
  | { type: EActionPoints.UPDATE_TASK; payload: ITask }
