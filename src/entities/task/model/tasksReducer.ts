import type { ITask } from '@/shared/types/task.types.ts'
import {
  ETasksActionPoints,
  type TActionTask,
} from '@/entities/task/model/types.ts'

export function tasksReducer(tasks: ITask[], action: TActionTask) {
  switch (action.type) {
    case ETasksActionPoints.ADD_TASK:
      return [...tasks, { ...action.payload }]
    case ETasksActionPoints.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.payload.id)
    case ETasksActionPoints.UPDATE_TASK: {
      return tasks.map((task) => {
        console.log(action.payload.id)
        if (task.id === action.payload.id) {
          console.log('chage', task.id)
          return action.payload
        }
        return task
      })
    }
    default: {
      return tasks
    }
  }
}
