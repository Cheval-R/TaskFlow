import ss from './Tags.module.scss'
import SidebarItem from '@/shared/ui/SidebarItem'
import TagsIcon from '../../../../shared/ui/TagsMark'
import PlusIcon from '@/assets/icons/plus.svg?react'
import tags from '@/entities/tags/tags.ts'
import TagsMark from '../../../../shared/ui/TagsMark'
import Tag from '@/shared/ui/Tag'

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
          <li className="item">
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
