import ss from './Navigation.module.scss'
import SidebarItem from '@/shared/ui/SidebarItem'
import {
  AnalyticIcon,
  TotalIcon,
  WeeklyCalendarIcon,
  DayCalendarIcon,
  MonthlyCalendarIcon,
} from '@/assets/icons'

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <nav className={ss.navigation}>
      <ul className={ss.list}>
        <li className={ss.item}>
          <SidebarItem
            icon={<TotalIcon />}
            count={12}
            active={false}
            onClick={() => console.log('click')}
          >
            Total
          </SidebarItem>
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<DayCalendarIcon />}
            count={4}
            active={false}
            onClick={() => console.log('click')}
          >
            Day
          </SidebarItem>
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<WeeklyCalendarIcon />}
            count={12}
            active={true}
            onClick={() => console.log('click')}
          >
            Week
          </SidebarItem>
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<MonthlyCalendarIcon />}
            count={12}
            active={false}
            onClick={() => console.log('click')}
          >
            Month
          </SidebarItem>
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<AnalyticIcon />}
            count={12}
            active={false}
            onClick={() => console.log('click')}
          >
            Analytics
          </SidebarItem>
        </li>
      </ul>
    </nav>
  )
}
