import ss from './WorkSpace.module.scss'
import { Outlet } from 'react-router'
import WorkSpaceMenu from '@/features/workspace-menu/ui/WorkSpaceMenu'
import TimeBar from './TimeBar'
import type { Dayjs } from 'dayjs'

interface Props {
  date: Dayjs
}

export const WorkSpace = ({ date }: Props) => {
  return (
    <div className={ss.workspace}>
      <WorkSpaceMenu date={date} />
      <div className={ss.timeZone} data-time-zone>
        <TimeBar />
        <Outlet />
      </div>
    </div>
  )
}
