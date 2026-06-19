import ss from './Aside.module.scss';
import buttonStyle from '@/shared/ui/Button/Button.module.scss';
import Logo from '@/shared/ui/Logo';
import Navigation from '@/features/navigation/ui/Navigation';
import Tags from '../../entities/tag/ui/Tags';
import PlusIcon from '@/assets/icons/plus.svg?react';
import { Button as AntButton } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useTasksCounters } from '@/entities/task/model/useTasksCounters.ts';
import { useCreateTaskModalContext } from '@/features/create-task-modal/model/createTaskModalContext.ts';
import { useTags } from '../../entities/tag/model/TagsContext.tsx';
import type { ITag } from '@/shared/types/tag.types.ts';
import useTagsActions from '@/entities/tag/model/useTasksActions.ts';

interface Props {}

export const Aside = ({}: Props) => {
  const tasksCounters = useTasksCounters();
  const [iconAnimated, setIconAnimated] = useState(false);
  const { openCreateTaskModal } = useCreateTaskModalContext();
  const { activeTags } = useTags();
  const { deleteActiveTagHandler, addActiveTagHandler } = useTagsActions();

  const filterTasksByTag = (tag: ITag) => {
    if (!activeTags) {
      addActiveTagHandler(tag.value);
    } else if (activeTags.includes(tag.value)) {
      deleteActiveTagHandler(tag.value);
    } else {
      addActiveTagHandler(tag.value);
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
        <p>CALENDAR</p>
      </div>
    </aside>
  );
};
