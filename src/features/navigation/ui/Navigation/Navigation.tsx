import ss from './Navigation.module.scss'
import SidebarItem from '@/shared/ui/SidebarItem'
import {
  AnalyticIcon,
  TotalIcon,
  WeeklyCalendarIcon,
  DayCalendarIcon,
  MonthlyCalendarIcon,
} from '@/assets/icons'

interface Props {
  tasksCounters: { total: number; today: number; week: number; month: number }
}

export const Navigation = ({ tasksCounters }: Props) => {
  return (
    <nav className={ss.navigation}>
      <ul className={ss.list}>
        <li className={ss.item}>
          <SidebarItem
            icon={<TotalIcon />}
            count={tasksCounters.total}
            active={false}
            onClick={() => console.log('click')}
          >
            Total
          </SidebarItem>
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<DayCalendarIcon />}
            count={tasksCounters.today}
            active={false}
            onClick={() => console.log('click')}
          >
            Today
          </SidebarItem>
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<WeeklyCalendarIcon />}
            count={tasksCounters.week}
            active={true}
            onClick={() => console.log('click')}
          >
            Week
          </SidebarItem>
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<MonthlyCalendarIcon />}
            count={tasksCounters.month}
            active={false}
            onClick={() => console.log('click')}
          >
            Month
          </SidebarItem>
        </li>
        <li className={ss.item}>
          <SidebarItem
            icon={<AnalyticIcon />}
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
