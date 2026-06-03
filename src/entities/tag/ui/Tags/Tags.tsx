import ss from './Tags.module.scss'
import SidebarItem from '@/shared/ui/SidebarItem'
import { Tag } from '@/shared/ui/Tag/Tag.tsx'
import { useTagsContext } from '@/entities/tag/model/TagsContext.ts'

interface Props {
  tags: {
    label: string
    count: number
    color: string
  }[]
}

export const Tags = ({}: Props) => {
  const tags = useTagsContext()
  return (
    <div className={ss.tags}>
      <ul className={ss.list}>
        {tags.map((tag) => (
          <li className="item" key={tag.value}>
            <SidebarItem
              active={false}
              onClick={() => console.log('click')}
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
