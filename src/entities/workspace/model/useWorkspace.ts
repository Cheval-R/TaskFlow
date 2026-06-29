import { useContext } from 'react';
import { WorkspaceContext } from '@/entities/workspace/model/WorkspaceContext.tsx';
import type { IWorkspaceState } from '@/entities/workspace/model/types.ts';
import type { Dayjs } from 'dayjs';

interface IUseWorkspaceReturns extends IWorkspaceState {
  actions: {
    toNextPeriod: () => void;
    toPreviousPeriod: () => void;
    toToday: () => void;
    moveTo: (date: Dayjs) => void;
  };
}

export const useWorkspace = (): IUseWorkspaceReturns => {
  const context = useContext(WorkspaceContext);
  if (context === null) {
    throw Error('WorkspaceContext out of context');
  }
  return context;
};
