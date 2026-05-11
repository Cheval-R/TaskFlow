import type { ITag } from '@/shared/types/tag.types.ts'

export interface ITask {
  id: string
  label: string
  description: string
  tag: ITag
  startTime: number
  endTime: number
  duration: number
}
