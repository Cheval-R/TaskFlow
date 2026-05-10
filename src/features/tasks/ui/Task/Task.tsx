import ss from './Task.module.scss'
import type { ITask } from '@/features/tasks/model/useTasks.ts'
interface Props {
  task: ITask
}

export const Task = ({ task }: Props) => {
  return (
    <div
      className={ss.task}
      style={{ position: 'absolute', top: task.startCoordinate }}
    >
      {task.name}
    </div>
  )
}
