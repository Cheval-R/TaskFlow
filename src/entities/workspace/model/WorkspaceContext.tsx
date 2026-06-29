import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useReducer,
  useState,
} from 'react';
import type { IWorkspaceContext } from '@/entities/workspace/model/types.ts';
import dayjs, { type Dayjs } from 'dayjs';
import { useWorkspaceType } from '@/entities/workspace/model/useWorkspaceType.ts';
import {
  setNewDate,
  setNextPeriod,
  setPreviousPeriod,
} from '@/entities/workspace/lib/date.ts';

export const WorkspaceContext = createContext<IWorkspaceContext | null>(null);

export const WorkspaceProvider = ({ children }: { children: ReactNode }) => {
  const workspaceType = useWorkspaceType();
  const [date, setDate] = useState(dayjs());

  const actions = {
    toNextPeriod: () => setDate((prev) => setNextPeriod(prev, workspaceType)),
    toPreviousPeriod: () =>
      setDate((prev) => setPreviousPeriod(prev, workspaceType)),
    toToday: () => setDate(dayjs()),
    moveTo: (newDate: Dayjs) => setDate(newDate),
  };

  const value = useMemo(
    () => ({
      date,
      actions,
    }),
    [date, actions],
  );

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
};
