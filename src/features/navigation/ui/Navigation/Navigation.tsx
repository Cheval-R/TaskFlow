import ss from './Navigation.module.scss';
import SidebarItem from '@/shared/ui/SidebarItem';
import {
  AnalyticIcon,
  TotalIcon,
  WeeklyCalendarIcon,
  DayCalendarIcon,
  MonthlyCalendarIcon,
} from '@/assets/icons';
import { NavLink } from 'react-router-dom';

interface Props {
  tasksCounters: { total: number; today: number; week: number; month: number };
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
          >
            Total
          </SidebarItem>
        </li>
        <li className={ss.item}>
          <NavLink to={'/day'}>
            {({ isActive }) => (
              <SidebarItem
                icon={<DayCalendarIcon />}
                count={tasksCounters.today}
                active={isActive}
              >
                Today
              </SidebarItem>
            )}
          </NavLink>
        </li>
        <li className={ss.item}>
          <NavLink to={'/week'}>
            {({ isActive }) => (
              <SidebarItem
                icon={<WeeklyCalendarIcon />}
                count={tasksCounters.week}
                active={isActive}
              >
                Week
              </SidebarItem>
            )}
          </NavLink>
        </li>
        <li className={ss.item}>
          <NavLink to={'/month'}>
            {({ isActive }) => (
              <SidebarItem
                icon={<MonthlyCalendarIcon />}
                count={tasksCounters.month}
                active={isActive}
              >
                Month
              </SidebarItem>
            )}
          </NavLink>
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
  );
};
