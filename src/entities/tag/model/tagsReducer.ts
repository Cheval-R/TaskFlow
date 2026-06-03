import type { ITag } from '@/shared/types/tag.types.ts'
import {
  ETagsActionPoints,
  type TActionTags,
} from '@/entities/tag/model/types.ts'

export function tagsReducer(tags: ITag[], action: TActionTags) {
  switch (action.type) {
    case ETagsActionPoints.ADD_TAG:
      return [...tags, { ...action.payload }]
    case ETagsActionPoints.DELETE_TAG:
      return tags.filter((tag) => tag.value !== action.payload.value)
    default: {
      return tags
    }
  }
}
