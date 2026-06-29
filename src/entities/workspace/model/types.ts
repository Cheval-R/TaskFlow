import type { Dayjs } from 'dayjs';
import type { Dispatch } from 'react';

export interface IWorkspaceState {
  date: Dayjs;
}

export interface IWorkspaceContext extends IWorkspaceState {
  actions: {
    toNextPeriod: () => void;
    toPreviousPeriod: () => void;
    toToday: () => void;
    moveTo: (date: Dayjs) => void;
  };
}

export type TWorkspaceType = 'day' | 'week' | 'month';

export type TActionWorkspace =
  | { type: 'SET_TYPE'; payload: TWorkspaceType }
  | { type: 'NEXT' }
  | { type: 'PREVIOUS' }
  | { type: 'TODAY' }
  | { type: 'MOVE_TO'; payload: Dayjs };
