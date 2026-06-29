import Day from '@/pages/Day';
import Month from '@/pages/Month';
import Week from '@/pages/Week';
import type { TWorkspaceType } from '@/entities/workspace/model/types.ts';

function getWorkspaceComponent(workspaceType: TWorkspaceType) {
  switch (workspaceType) {
    case 'day':
      return <Day />;
    case 'week':
      return <Week />;
    case 'month':
      return <Month />;
    default:
      return <Day />;
  }
}

export default getWorkspaceComponent;
