import ss from './TaskDetailsMenu.module.scss';
import Tag from '@/shared/ui/Tag';
import { CloseOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Flex, Typography } from 'antd';
import { TrashIcon } from '@/assets/icons';
import { useTasks } from '@/entities/task/model/useTasks.ts';

import formatMinuteToTime from '@/shared/model/formatMinuteToTime.ts';
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts';
import { useTaskDetails } from '@/features/task-details/model/context/useTaskDetails.ts';
import { useTags } from '@/entities/tag/model/useTags.ts';

interface Props {}

export const TaskDetailsMenu = ({}: Props) => {
  const { openCreateTaskModal } = useCreateTaskModal();
  const {
    actions: { deleteTask },
    tasks,
  } = useTasks();
  const { tags } = useTags();
  const { closeTaskDetails, selectedTaskID } = useTaskDetails();
  if (selectedTaskID === null) return <aside className={`${ss.sidebar} `} />;
  const selectedTask = tasks.find((task) => task.id === selectedTaskID);

  const tag = tags.find((tag) => tag.value === selectedTask?.tagValue);
  if (selectedTask === undefined || tag === undefined) {
    closeTaskDetails();
    return <aside className={`${ss.sidebar} `} />;
  }

  return (
    <aside className={`${ss.sidebar} ${selectedTaskID ? ss.isOpen : ''}`}>
      <Button
        className={ss.closeButton}
        icon={<CloseOutlined />}
        type={'link'}
        danger={true}
        onClick={closeTaskDetails}
      />
      <Flex vertical={true}>
        <Tag size={'small'} color={tag.color}>
          {tag.label}
        </Tag>
        <Typography.Title level={4}>{selectedTask.label}</Typography.Title>

        <Typography.Text className={ss.date}>
          {selectedTask.date.format('dddd, MMMM DD, YYYY')}
        </Typography.Text>

        <Typography.Text>
          {`${selectedTask.timeRange[0].format('HH:mm')} - ${selectedTask.timeRange[1].format('HH:mm')} (${formatMinuteToTime(selectedTask.timeRange[1].diff(selectedTask.timeRange[0], 'minute'))})`}
        </Typography.Text>
        <Typography.Title level={5}>Description</Typography.Title>
        <Typography.Text className={ss.description}>
          {selectedTask.description}
        </Typography.Text>
      </Flex>
      <Flex vertical={true} gap={'small'}>
        <Button
          icon={<MoreOutlined />}
          onClick={() => {
            openCreateTaskModal({
              ...selectedTask,
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
              ? deleteTask(selectedTask.id)
              : null;
          }}
        >
          Delete Task
        </Button>
      </Flex>
    </aside>
  );
};
