import { createContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { ITasksContext } from '@/entities/task/model/types.ts';
import { tasksReducer } from '@/entities/task/model/tasksReducer.ts';
import { mockTasks } from '@/entities/task/model/mockTasks.ts';

export const TasksContext = createContext<ITasksContext | null>(null);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, mockTasks);

  return <TasksContext value={{ tasks, dispatch }}>{children}</TasksContext>;
};
