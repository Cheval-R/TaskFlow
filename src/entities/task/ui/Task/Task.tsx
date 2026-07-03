import ss from './Task.module.scss';
import { type CSSProperties } from 'react';
import Tag from '@/shared/ui/Tag';
import useGetTag from '../../../tag/model/useGetTag.ts';
import { convertMinutesToPixel } from '@/shared/model/timeConvert.ts';
import type { ITaskLayout } from '@/entities/task/model/types.ts';
import { Space } from 'antd';
import TaskEditPopup from '@/shared/ui/TaskEditPopup';

interface Props {
  task: ITaskLayout;
  onClick: (id: string) => void;
  onDelete: (id: string) => void;
}

export const Task = ({ task, onClick, onDelete }: Props) => {
  const { label, timeRange, tagValue } = task;
  const tag = useGetTag(tagValue);

  const startTime = timeRange[0];
  const endTime = timeRange[1];

  const startPosition = convertMinutesToPixel(
    startTime.hour() * 60 + startTime.minute(),
  );

  const taskDuration = endTime.diff(startTime, 'minute');
  const taskHeight = convertMinutesToPixel(taskDuration);
  return (
    <div
      onContextMenu={(e) => {
        onDelete(e.currentTarget.id);
      }}
      onClick={() => {
        onClick(task.id);
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
        <TaskEditPopup task={task} className={ss.popupButton} />
        <p className={ss.time}>
          {`${startTime.format('HH:mm')} - ${endTime.format('HH:mm')}`}
        </p>
        <h2 className={ss.label}>
          <Space>{label}</Space>
        </h2>
        <div className={ss.tag}>
          <Tag color={tag.color}>{tag.label}</Tag>
        </div>
      </div>
    </div>
  );
};
