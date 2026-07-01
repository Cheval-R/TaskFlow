import ss from './TaskEditPopup.module.scss';
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts';
import { useTasks } from '@/entities/task/model/useTasks.ts';

import type { MenuProps } from 'antd';
import type { ITask } from '@/shared/types/task.types.ts';
interface Props {
  task: ITask;
  className?: string;
}

export const TaskEditPopup = ({ task, className }: Props) => {
  const { openCreateTaskModal } = useCreateTaskModal();
  const {
    actions: { deleteTask },
  } = useTasks();

  const items: MenuProps['items'] = [
    {
      label: 'Edit Task',
      key: 1,
      icon: <EditOutlined />,
      onClick: () => openCreateTaskModal(task),
    },
    {
      label: 'Delete Task',
      key: 2,
      danger: true,
      icon: <DeleteOutlined />,
      onClick: () => deleteTask(task.id),
    },
  ];
  return (
    <Dropdown trigger={['click']} menu={{ items }}>
      <Button className={className} icon={<EllipsisOutlined />} type={'text'} />
    </Dropdown>
  );
};
