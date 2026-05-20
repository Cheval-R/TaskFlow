import ss from './Tags.module.scss'
import tags from '../../model/tags.ts'
import SidebarItem from '@/shared/ui/SidebarItem'
import { Tag } from '@/shared/ui/Tag/Tag.tsx'

interface Props {
  tags: {
    label: string
    count: number
    color: string
  }[]
}

export const Tags = ({}: Props) => {
  return (
    <div className={ss.tags}>
      <ul className={ss.list}>
        {tags.map((tag) => (
          <li className="item" key={tag.value}>
            <SidebarItem
              count={tag.taskCount}
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
