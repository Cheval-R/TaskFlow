import ss from './WorkSpace.module.scss'
import { Outlet } from 'react-router'
import WorkSpaceMenu from '@/features/workspace-menu/ui/WorkSpaceMenu'
import TimeBar from './TimeBar'

interface Props {}

export const WorkSpace = ({}: Props) => {
  return (
    <div className={ss.workspace}>
      <WorkSpaceMenu />
      <div className={ss.timeZone} data-time-zone>
        <TimeBar />
        <Outlet />
      </div>
    </div>
  )
}
