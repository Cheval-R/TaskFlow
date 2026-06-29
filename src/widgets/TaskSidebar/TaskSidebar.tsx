import ss from './TaskSidebar.module.scss';
import type { ITask } from '@/shared/types/task.types.ts';
import Tag from '@/shared/ui/Tag';
import useGetTag from '@/entities/tag/model/useGetTag.ts';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Flex,
  Select,
  Space,
  TimePicker,
  type TimeRangePickerProps,
  Typography,
} from 'antd';
import { TrashIcon } from '@/assets/icons';
import { useTasks } from '@/entities/task/model/useTasks.ts';
import { useState } from 'react';
import { useTags } from '@/entities/tag/model/useTags.ts';
import type { Dayjs } from 'dayjs';
import formatMinuteToTime from '@/shared/model/formatMinuteToTime.ts';

interface Props {
  task: ITask;
}

type TTasksFields = 'tag' | 'title' | 'date' | 'time' | 'description' | null;

export const TaskSidebar = ({ task }: Props) => {
  const tag = useGetTag(task.tagValue);
  const [editableField, setEditableField] = useState<TTasksFields>(null);
  const { tags } = useTags();
  const {
    actions: { updateTask, deleteTask },
  } = useTasks();

  const onCalendarChangeHandler: TimeRangePickerProps['onChange'] = (time) => {
    if (!time) return;
    const startTime = time[0];
    const endTime = time[1];
    if (!startTime || !endTime) return;
    if (startTime.isSame(endTime)) {
      endTime.add(15, 'minute');
    }

    updateTask({ ...task, timeRange: [startTime, endTime] });
    setEditableField(null);
  };
  return (
    <aside className={ss.sidebar}>
      <Button
        className={ss.closeButton}
        icon={<CloseOutlined />}
        type={'link'}
        danger={true}
      />
      <Space vertical={true} size={'medium'}>
        <div>
          {editableField === 'tag' ? (
            <Select
              open
              autoFocus
              showSearch={{
                filterOption: (input, option) =>
                  (option?.label ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase()),
              }}
              placeholder={'Select a tag'}
              options={tags}
              onChange={(value: string) => {
                updateTask({ ...task, tagValue: value });
                setEditableField(null);
              }}
              onBlur={() => setEditableField(null)}
            />
          ) : (
            <Tag size={'small'} color={tag.color}>
              <Space>
                {tag.label}
                <EditOutlined
                  style={{ color: 'orange' }}
                  onClick={() => {
                    setEditableField('tag');
                  }}
                />
              </Space>
            </Tag>
          )}
          <Typography.Title
            level={4}
            editable={{
              onChange: (value) => updateTask({ ...task, label: value }),
              icon: <EditOutlined style={{ color: 'orange' }} />,
            }}
          >
            {task.label}
          </Typography.Title>
          {editableField === 'date' ? (
            <DatePicker
              defaultValue={task.date}
              autoFocus
              onChange={(date) => {
                updateTask({ ...task, date: date === null ? task.date : date });
                setEditableField(null);
              }}
              // Починить закрытие прии блюре (перекрывает клик по дате)
              // onBlur={() => setEditableField(null)}
            />
          ) : (
            <Space>
              <Typography.Text className={ss.date}>
                {task.date.format('dddd, MMMM DD, YYYY')}
              </Typography.Text>
              <EditOutlined
                style={{ color: 'orange' }}
                onClick={() => {
                  setEditableField('date');
                }}
              />
            </Space>
          )}
          {editableField === 'time' ? (
            <TimePicker.RangePicker
              minuteStep={15}
              showSecond={false}
              onChange={onCalendarChangeHandler}
            />
          ) : (
            <Space>
              <Typography.Text>
                {`${task.timeRange[0].format('HH:mm')} - ${task.timeRange[1].format('HH:mm')}`}
              </Typography.Text>
              <EditOutlined
                style={{ color: 'orange' }}
                onClick={() => setEditableField('time')}
              />
            </Space>
          )}
        </div>
        <Space vertical={true}>
          <Space>
            <Typography.Title level={5}>Description</Typography.Title>
            <EditOutlined
              style={{ color: 'orange' }}
              onClick={() => alert('click!!!!!!!!')}
            />
          </Space>
          <Typography.Text className={ss.description}>
            {task.description}
          </Typography.Text>
        </Space>
      </Space>
      <Flex vertical={true} gap={'small'}>
        <Button icon={<EditOutlined />}>Edit Task</Button>
        <Button
          className={ss.deleteButton}
          danger={true}
          icon={<TrashIcon />}
          onClick={() => {
            confirm('Вы уверены, что хотите удалить задачу?')
              ? deleteTask(task.id)
              : null;
          }}
        >
          Delete Task
        </Button>
      </Flex>
    </aside>
  );
};
