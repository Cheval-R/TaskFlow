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
            label="Total"
            count={12}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<DayCalendarIcon />}
            label="Today"
            count={4}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<WeeklyCalendarIcon />}
            label="Week"
            count={12}
            active={true}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<MonthlyCalendarIcon />}
            label="Month"
            count={12}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<AnalyticIcon />}
            label="Analytics"
            count={12}
            active={false}
            onClick={() => console.log('click')}
          />
        </li>
      </ul>
    </nav>
  )
}
