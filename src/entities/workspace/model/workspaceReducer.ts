import type {
  IWorkspaceState,
  TActionWorkspace,
} from '@/entities/workspace/model/types.ts';
import {
  setNextPeriod,
  setToPreviousPeriod,
  setToday,
  setDate,
} from '@/entities/workspace/lib/date.ts';

export function workspaceReducer(
  workspaceState: IWorkspaceState,
  action: TActionWorkspace,
): IWorkspaceState {
  switch (action.type) {
    case 'MOVE_TO':
      return { ...workspaceState, date: setDate(action.payload) };
    case 'NEXT':
      return {
        ...workspaceState,
        date: setNextPeriod(workspaceState.date, workspaceState.type),
      };
    case 'PREVIOUS':
      return {
        ...workspaceState,
        date: setToPreviousPeriod(workspaceState.date, workspaceState.type),
      };
    case 'TODAY':
      return {
        ...workspaceState,
        date: setToday(),
      };
    case 'SET_TYPE':
      return {
        ...workspaceState,
        type: action.payload,
      };
    default:
      return workspaceState;
  }
}
