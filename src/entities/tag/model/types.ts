import type { ITag } from '@/shared/types/tag.types.ts'

export enum ETagsActionPoints {
  ADD_TAG = 'ADD_TAG',
  DELETE_TAG = 'DELETE_TAG',
  UPDATE_TAG = 'UPDATE_TAG',
}

export type TActionTags =
  | {
      type: ETagsActionPoints.ADD_TAG
      payload: ITag
    }
  | {
      type: ETagsActionPoints.DELETE_TAG
      payload: { value: string }
    }
  | {
      type: ETagsActionPoints.UPDATE_TAG
      payload: ITag
    }
