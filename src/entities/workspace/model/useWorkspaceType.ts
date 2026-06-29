import { useParams } from 'react-router';
import type { TWorkspaceType } from '@/entities/workspace/model/types.ts';

export function useWorkspaceType(): TWorkspaceType {
  const { workspaceType } = useParams();
  if (
    workspaceType === 'day' ||
    workspaceType === 'week' ||
    workspaceType === 'month'
  )
    return workspaceType;
  return 'day';
}
