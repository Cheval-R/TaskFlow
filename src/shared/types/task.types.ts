import type { ITag } from '@/shared/types/tag.types.ts'
import type { Dayjs } from 'dayjs'

export interface ITask {
  id: string
  label: string
  description: string
  tagValue: string
  date: Dayjs
  timeRange: [Dayjs, Dayjs]
}

export type ITasksCounters = {
  total: number
  today: number
  week: number
  month: number
}
