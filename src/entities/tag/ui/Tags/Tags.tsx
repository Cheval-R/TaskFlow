import ss from './Tags.module.scss';
import SidebarItem from '@/shared/ui/SidebarItem';
import { Tag } from '@/shared/ui/Tag/Tag.tsx';
import type { ITag } from '@/shared/types/tag.types.ts';

import AddTaskForm from '../../../../features/add-task-form/ui/AddTaskForm';
import { useTags } from '@/entities/tag/model/useTags.ts';

interface Props {
  onClick: (tag: ITag) => void;
}

export const Tags = ({ onClick }: Props) => {
  const { activeTags, tags } = useTags();

  return (
    <div className={ss.tags}>
      <ul className={ss.list}>
        {tags.map((tag) => (
          <li className="item" key={tag.value}>
            <SidebarItem
              active={activeTags ? activeTags.includes(tag.value) : false}
              onClick={() => onClick(tag)}
              color={tag.color}
            >
              <Tag color={tag.color}>{tag.label}</Tag>
            </SidebarItem>
          </li>
        ))}
      </ul>
      <AddTaskForm />
    </div>
  );
};
