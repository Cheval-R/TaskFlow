import ss from './Navigation.module.scss'
import SidebarItem from '../../../../shared/ui/SidebarItem'
import NavigationIcon from '../NavigationIcon'
import plusIcon from '@/assets/icons/plus.svg'
interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <nav className={ss.navigation}>
      <ul className={ss.list}>
        <li className={ss.item}>
          <SidebarItem
            icon={
              <NavigationIcon
                alt={''}
                src={plusIcon}
                width={'20'}
                height={'20'}
              />
            }
            label="Total"
            count={12}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={
              <NavigationIcon
                alt={''}
                src={plusIcon}
                width={'20'}
                height={'20'}
              />
            }
            label="Today"
            count={4}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={
              <NavigationIcon
                alt={''}
                src={plusIcon}
                width={'20'}
                height={'20'}
              />
            }
            label="Week"
            count={12}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={
              <NavigationIcon
                alt={''}
                src={plusIcon}
                width={'20'}
                height={'20'}
              />
            }
            label="Month"
            count={12}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={
              <NavigationIcon
                alt={''}
                src={plusIcon}
                width={'20'}
                height={'20'}
              />
            }
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
