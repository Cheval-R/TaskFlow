import ss from './Aside.module.scss';
import buttonStyle from '@/shared/ui/Button/Button.module.scss';
import Logo from '@/shared/ui/Logo';
import Navigation from '@/features/navigation/ui/Navigation';
import Tags from '../../entities/tag/ui/Tags';
import PlusIcon from '@/assets/icons/plus.svg?react';
import { Button, Button as AntButton, Calendar } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useTasksCounters } from '@/entities/task/model/useTasksCounters.ts';

import type { ITag } from '@/shared/types/tag.types.ts';
import { useTags } from '@/entities/tag/model/useTags.ts';
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts';
import { useWorkspace } from '@/entities/workspace/model/useWorkspace.ts';
import { useNavigate } from 'react-router';

interface Props {}

export const Aside = ({}: Props) => {
  const tasksCounters = useTasksCounters();
  const [iconAnimated, setIconAnimated] = useState(false);
  const { openCreateTaskModal } = useCreateTaskModal();
  const {
    activeTags,
    actions: { deleteActiveTag, addActiveTag },
  } = useTags();
  const {
    date,
    actions: { moveTo, toToday },
  } = useWorkspace();

  const filterTasksByTag = (tag: ITag) => {
    if (!activeTags) {
      addActiveTag(tag.value);
    } else if (activeTags.includes(tag.value)) {
      deleteActiveTag(tag.value);
    } else {
      addActiveTag(tag.value);
    }
  };
  return (
    <aside className={ss.aside}>
      <Logo />
      <div className={ss.content}>
        <AntButton
          type={'primary'}
          size={'medium'}
          className={ss.btn}
          icon={
            <PlusIcon
              className={iconAnimated ? buttonStyle.animate : ''}
              onAnimationEnd={() => setIconAnimated(false)}
            />
          }
          iconPlacement={'start'}
          onClick={() => {
            setIconAnimated((prev) => !prev);
            openCreateTaskModal({
              date: dayjs(),
              timeRange: [dayjs(), dayjs().add(30, 'minutes')],
            });
          }}
        >
          Add Task
        </AntButton>
        <Navigation tasksCounters={tasksCounters} />
        <Tags onClick={filterTasksByTag} />
        <div className={ss.caldendarWrapper}>
          <Calendar
            fullscreen={false}
            className={ss.calendar}
            classNames={{ header: ss.calendarHeader }}
            value={date}
            onSelect={(date) => {
              if (date !== null) moveTo(date);
            }}
          />
        </div>
        <Button
          onClick={toToday}
          variant={'solid'}
          color={'primary'}
          size={'small'}
          style={{ width: '100%', height: '24px' }}
        >
          Today
        </Button>
      </div>
    </aside>
  );
};
