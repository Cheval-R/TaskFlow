import type { ITag } from '@/shared/types/tag.types.ts';
import type { Dispatch } from 'react';

export enum ETagsActionPoints {
  ADD_TAG = 'ADD_TAG',
  DELETE_TAG = 'DELETE_TAG',
  UPDATE_TAG = 'UPDATE_TAG',
  ADD_ACTIVE_TAG = 'ADD_ACTIVE_TAG',
  DELETE_ACTIVE_TAG = 'DELETE_ACTIVE_TAG',
}

export type TActionTags =
  | {
      type: ETagsActionPoints.ADD_TAG;
      payload: ITag;
    }
  | {
      type: ETagsActionPoints.DELETE_TAG;
      payload: { value: string };
    }
  | {
      type: ETagsActionPoints.UPDATE_TAG;
      payload: ITag;
    }
  | {
      type: ETagsActionPoints.ADD_ACTIVE_TAG;
      payload: string;
    }
  | { type: ETagsActionPoints.DELETE_ACTIVE_TAG; payload: string };

export interface ITagsState {
  tags: ITag[];
  activeTags: string[];
}

export interface ITagsContext {
  tags: ITag[];
  activeTags: string[];

  dispatch: Dispatch<TActionTags>;
}
