import ss from './Tags.module.scss'
import SidebarItem from '@/shared/ui/SidebarItem'
import { Tag } from '@/shared/ui/Tag/Tag.tsx'
import type { ITag } from '@/shared/types/tag.types.ts'
import { useTagsContext } from '@/entities/tag/model/TagsContext.ts'

interface Props {
  tags: ITag[]
  onClick: (tag: ITag) => void
}

export const Tags = ({ tags, onClick }: Props) => {
  const { activeTag } = useTagsContext()
  return (
    <div className={ss.tags}>
      <ul className={ss.list}>
        {tags.map((tag) => (
          <li className="item" key={tag.value}>
            <SidebarItem
              active={activeTag === tag.value}
              onClick={() => onClick(tag)}
              color={tag.color}
            >
              <Tag color={tag.color}>{tag.label}</Tag>
            </SidebarItem>
          </li>
        ))}
      </ul>
    </div>
  )
}
