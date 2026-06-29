import dayjs, { type Dayjs } from 'dayjs';
import { useParams } from 'react-router';
import type { TWorkspaceType } from '@/entities/workspace/model/types.ts';

export function setNextPeriod(
  currentDate: Dayjs,
  workspaceType: TWorkspaceType,
): Dayjs {
  switch (workspaceType) {
    case 'day': {
      return dayjs(currentDate).add(1, workspaceType);
    }
    case 'month': {
      return dayjs(currentDate).add(1, workspaceType);
    }
    case 'week': {
      return dayjs(currentDate).add(1, workspaceType);
    }
    default: {
      return currentDate;
    }
  }
}
export function setPreviousPeriod(
  currentDate: Dayjs,
  workspaceType: TWorkspaceType,
): Dayjs {
  switch (workspaceType) {
    case 'day': {
      return dayjs(currentDate).subtract(1, workspaceType);
    }
    case 'month': {
      return dayjs(currentDate).subtract(1, workspaceType);
    }
    case 'week': {
      return dayjs(currentDate).subtract(1, workspaceType);
    }
    default: {
      return currentDate;
    }
  }
}

export function setNewDate(date: Dayjs) {
  return dayjs(date);
}
export function setToday() {
  return dayjs();
}
