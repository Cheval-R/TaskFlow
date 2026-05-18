import formatMinuteToTime from '@/shared/model/formatMinuteToTime'
import ss from './Task.module.scss'
import type { ITag } from '@/shared/types/tag.types.ts'
import Tag from '@/shared/ui/Tag'
import type { CSSProperties } from 'react'

interface Props {
  label: string
  description: string
  tag: ITag
  startTime: number
  duration: number
  endTime: number
}

type CSSVars = CSSProperties & Record<`--${string}`, string | number>

export const Task = ({
  tag,
  startTime,
  duration,
  endTime,
  description,
  label,
}: Props) => {
  function getPixelFromTime(time: number) {
    return (time / 60) * 64
  }
  return (
    <div
      className={ss.task}
      style={
        {
          '--task-color': tag.color,
          position: 'absolute',
          top: getPixelFromTime(startTime),
          height: getPixelFromTime(duration),
        } as CSSProperties
      }
    >
      <div className={ss.time}>
        {`${formatMinuteToTime(startTime)} - ${formatMinuteToTime(endTime)}`}
      </div>
      <div className={ss.label}>{label}</div>
      <div className={ss.tag}>
        <Tag color={tag.color}>{tag.label}</Tag>
      </div>
    </div>
  )
}
