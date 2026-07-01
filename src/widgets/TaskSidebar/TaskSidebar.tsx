import ss from './TaskSidebar.module.scss';
import type { ITask } from '@/shared/types/task.types.ts';
import Tag from '@/shared/ui/Tag';
import useGetTag from '@/entities/tag/model/useGetTag.ts';
import { CloseOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Flex, Typography } from 'antd';
import { TrashIcon } from '@/assets/icons';
import { useTasks } from '@/entities/task/model/useTasks.ts';

import formatMinuteToTime from '@/shared/model/formatMinuteToTime.ts';
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts';

interface Props {
  task: ITask;
}

export const TaskSidebar = ({ task }: Props) => {
  const tag = useGetTag(task.tagValue);
  const {
    actions: { deleteTask },
  } = useTasks();

  const { openCreateTaskModal } = useCreateTaskModal();
  return (
    <aside className={ss.sidebar}>
      <Button
        className={ss.closeButton}
        icon={<CloseOutlined />}
        type={'link'}
        danger={true}
      />
      <Flex vertical={true}>
        <Tag size={'small'} color={tag.color}>
          {tag.label}
        </Tag>
        <Typography.Title level={4}>{task.label}</Typography.Title>

        <Typography.Text className={ss.date}>
          {task.date.format('dddd, MMMM DD, YYYY')}
        </Typography.Text>

        <Typography.Text>
          {`${task.timeRange[0].format('HH:mm')} - ${task.timeRange[1].format('HH:mm')} (${formatMinuteToTime(task.timeRange[1].diff(task.timeRange[0], 'minute'))})`}
        </Typography.Text>
        <Typography.Title level={5}>Description</Typography.Title>
        <Typography.Text className={ss.description}>
          {task.description}
        </Typography.Text>
      </Flex>
      <Flex vertical={true} gap={'small'}>
        <Button
          icon={<MoreOutlined />}
          onClick={() => {
            openCreateTaskModal({
              ...task,
            });
          }}
        >
          Edit Task
        </Button>
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
