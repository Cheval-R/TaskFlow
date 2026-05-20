import ss from './Task.module.scss'
import type { CSSProperties } from 'react'
import Tag from '@/shared/ui/Tag'
import getTag from '@/shared/model/getTag.ts'
import type { ITask } from '@/shared/types/task.types.ts'
import { convertMinutesToPixel } from '@/shared/model/timeConvert.ts'

interface Props extends ITask {}

type CSSVars = CSSProperties & Record<`--${string}`, string | number>

export const Task = ({
  id,
  label,
  description,
  tagValue,
  date,
  timeRange,
}: Props) => {
  const tag = getTag(tagValue)

  const startTime = timeRange[0]
  const endTime = timeRange[1]

  const startPosition = convertMinutesToPixel(
    startTime.hour() * 60 + startTime.minute(),
  )

  console.log(startPosition)

  const taskDuration = endTime.diff(startTime, 'minute')
  const taskHeight = convertMinutesToPixel(taskDuration)

  return (
    <div
      className={`${ss.task}`}
      style={
        {
          '--task-color': tag.color,
          position: 'absolute',
          top: startPosition,
          height: taskHeight,
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
  )
}
