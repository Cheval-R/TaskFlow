import { useContext, useReducer } from 'react';
import { WorkspaceContext } from '@/entities/workspace/model/WorkspaceContext.tsx';
import type {
  IWorkspaceState,
  TWorkspaceType,
} from '@/entities/workspace/model/types.ts';
import dayjs, { type Dayjs } from 'dayjs';

interface IUseWorkspaceReturns extends IWorkspaceState {
  actions: {
    toNextPeriod: () => void;
    toPreviousPeriod: () => void;
    toToday: () => void;
    setType: (type: TWorkspaceType) => void;
    moveTo: (date: Dayjs) => void;
  };
}

export const useWorkspace = (): IUseWorkspaceReturns => {
  const context = useContext(WorkspaceContext);
  if (context === null) {
    throw Error('WorkspaceContext out of context');
  }
  const { type, dispatch, date } = context;
  return {
    type,
    date,
    actions: {
      toNextPeriod: () => dispatch({ type: 'NEXT' }),
      toPreviousPeriod: () => dispatch({ type: 'PREVIOUS' }),
      toToday: () => dispatch({ type: 'TODAY' }),
      setType: (type: TWorkspaceType) =>
        dispatch({ type: 'SET_TYPE', payload: type }),
      moveTo: (date: Dayjs) => dispatch({ type: 'MOVE_TO', payload: date }),
    },
  };
};
