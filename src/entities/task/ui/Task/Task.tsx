import ss from './Task.module.scss'
import { type CSSProperties } from 'react'
import Tag from '@/shared/ui/Tag'
import useGetTag from '../../../tag/model/useGetTag.ts'
import { convertMinutesToPixel } from '@/shared/model/timeConvert.ts'
import type { ITaskLayout } from '@/entities/task/model/types.ts'
import type { ICreateTaskModalFormValues } from '@/features/create-task-modal/types/createTaskModal.types.ts'

interface Props {
  task: ITaskLayout
  onEdit: (taskValues: ICreateTaskModalFormValues) => void
  onDelete: (id: string) => void
}

export const Task = ({ task, onEdit, onDelete }: Props) => {
  const { label, timeRange, tagValue } = task
  const tag = useGetTag(tagValue)

  const startTime = timeRange[0]
  const endTime = timeRange[1]

  const startPosition = convertMinutesToPixel(
    startTime.hour() * 60 + startTime.minute(),
  )

  const taskDuration = endTime.diff(startTime, 'minute')
  const taskHeight = convertMinutesToPixel(taskDuration)

  return (
    <>
      <div
        onContextMenu={(e) => {
          onDelete(e.currentTarget.id)
        }}
        onDoubleClick={() => {
          onEdit({ ...task })
        }}
        id={task.id}
        className={`${ss.task}`}
        style={
          {
            '--task-color': tag.color,
            position: 'absolute',
            top: startPosition,
            left: task.leftPosition,
            height: taskHeight,
            width: task.columnWidth,
          } as CSSProperties
        }
      >
        <div className={ss.content}>
          <p className={ss.time}>
            {`${startTime.format('HH:mm')} - ${endTime.format('HH:mm')}`}
          </p>
          <h2 className={ss.label}>{label}</h2>
          <div className={ss.tag}>
            <Tag color={tag.color}>{tag.label}</Tag>
          </div>
        </div>
      </div>
    </>
  )
}
