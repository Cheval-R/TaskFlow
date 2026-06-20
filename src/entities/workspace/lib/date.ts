import type { TWorkspaceType } from '@/entities/workspace/model/types.ts';
import dayjs, { type Dayjs } from 'dayjs';

export function setNextPeriod(
  currentDate: Dayjs,
  periodType: TWorkspaceType,
): Dayjs {
  switch (periodType) {
    case 'day': {
      return dayjs(currentDate).add(1, periodType);
    }
    case 'month': {
      return dayjs(currentDate).add(1, periodType);
    }
    case 'week': {
      return dayjs(currentDate).add(1, periodType);
    }
    default: {
      return currentDate;
    }
  }
}
export function setToPreviousPeriod(
  currentDate: Dayjs,
  periodType: TWorkspaceType,
): Dayjs {
  switch (periodType) {
    case 'day': {
      return dayjs(currentDate).subtract(1, periodType);
    }
    case 'month': {
      return dayjs(currentDate).subtract(1, periodType);
    }
    case 'week': {
      return dayjs(currentDate).subtract(1, periodType);
    }
    default: {
      return currentDate;
    }
  }
}

export function setDate(date: Dayjs) {
  return dayjs(date);
}
export function setToday() {
  return dayjs();
}
