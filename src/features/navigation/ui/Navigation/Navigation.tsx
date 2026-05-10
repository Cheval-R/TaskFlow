import ss from './Navigation.module.scss'
import SidebarItem from '@/shared/ui/SidebarItem'
import PlusIcon from '@/assets/icons/plus.svg?react'
import { Flex } from 'antd'

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <nav className={ss.navigation}>
      <ul className={ss.list}>
        <li className={ss.item}>
          <SidebarItem
            icon={<PlusIcon />}
            label="Total"
            count={12}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<PlusIcon />}
            label="Today"
            count={4}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<PlusIcon />}
            label="Week"
            count={12}
            active={true}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<PlusIcon />}
            label="Month"
            count={12}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<PlusIcon />}
            label="Today"
            count={12}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
      </ul>
    </nav>
  )
}
