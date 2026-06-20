import { useMemo } from 'react';
import { useTasks } from './useTasks';
import type { ITask, ITasksCounters } from '@/shared/types/task.types.ts';
import dayjs from 'dayjs';

function getNumberOfTasks(tasks: ITask[]): ITasksCounters {
  let today = 0;
  let week = 0;
  let month = 0;
  const total = tasks.length;
  for (let task of tasks) {
    if (task.date.isSame(dayjs(), 'day')) {
      today++;
    }
    if (task.date.isSame(dayjs(), 'week')) {
      week++;
    }
    if (task.date.isSame(dayjs(), 'month')) {
      month++;
    }
  }
  return { total, today, week, month };
}

export function useTasksCounters() {
  const { tasks } = useTasks();
  const taskCounters = useMemo(() => {
    return getNumberOfTasks(tasks);
  }, [tasks]);
  return taskCounters;
}
