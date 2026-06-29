import ss from './WorkSpace.module.scss';
import TimeBar from '../../../widgets/TimeBar';
import WorkspaceMenu from '../../../features/workspace-menu/ui/WorkspaceMenu';
import { useWorkspaceType } from '@/entities/workspace/model/useWorkspaceType.ts';
import getWorkspaceComponent from '@/entities/workspace/model/getWorkspaceComponent.tsx';

export const Workspace = () => {
  return (
    <div className={ss.workspace}>
      <WorkspaceMenu />
      <div className={ss.timeZone} data-time-zone>
        <TimeBar />
        {getWorkspaceComponent(useWorkspaceType())}
      </div>
    </div>
  );
};
