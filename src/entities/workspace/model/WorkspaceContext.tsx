import { createContext, type ReactNode, useContext, useReducer } from 'react';
import type { IWorkspaceContext } from '@/entities/workspace/model/types.ts';
import dayjs from 'dayjs';
import { workspaceReducer } from '@/entities/workspace/model/workspaceReducer.ts';

export const WorkspaceContext = createContext<IWorkspaceContext | null>(null);

export const WorkspaceProvider = ({ children }: { children: ReactNode }) => {
  const [workspaceState, dispatch] = useReducer(workspaceReducer, {
    type: 'day',
    date: dayjs(),
  });

  return (
    <WorkspaceContext.Provider
      value={{
        ...workspaceState,
        dispatch,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};
