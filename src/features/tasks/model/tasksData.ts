import type { ITask } from '@/shared/types/task.types.ts'
import tags from '@/entities/tags/tags.ts'

export const tasks: ITask[] = [
  {
    id: '1',
    label: 'Morning Routine',
    description: 'desc',
    tag: {
      label: 'Personal',
      value: 'personal',
      color: '#60b462',
      taskCount: 3,
    },
    startTime: 150,
    endTime: 270,
    duration: 120,
  },
]
