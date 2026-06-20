import ss from './WorkSpace.module.scss';
import { Outlet } from 'react-router';
import TimeBar from '../../../widgets/TimeBar';
import WorkspaceMenu from '../../../features/workspace-menu/ui/WorkspaceMenu';

export const Workspace = () => {
  return (
    <div className={ss.workspace}>
      <WorkspaceMenu />
      <div className={ss.timeZone} data-time-zone>
        <TimeBar />
        <Outlet />
      </div>
    </div>
  );
};
