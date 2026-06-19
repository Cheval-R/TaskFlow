import type { ITag } from '@/shared/types/tag.types.ts'
import {
  ETagsActionPoints,
  type ITagsState,
  type TActionTags,
} from '@/entities/tag/model/types.ts'

export function tagsReducer(
  tagsState: { tags: ITag[]; activeTags: string[] },
  action: TActionTags,
): ITagsState {
  switch (action.type) {
    case ETagsActionPoints.ADD_TAG:
      return { ...tagsState, tags: [...tagsState.tags, { ...action.payload }] }
    case ETagsActionPoints.DELETE_TAG:
      return {
        ...tagsState,
        tags: tagsState.tags.filter(
          (tag) => tag.value !== action.payload.value,
        ),
      }
    case ETagsActionPoints.UPDATE_TAG:
      // Проверить будет ли у него айди и если ббудет то нужно вставить айди старой вариации тега
      return {
        ...tagsState,
        tags: tagsState.tags.map((tag) => {
          if (tag.value !== action.payload.value) {
            return tag
          }
          return action.payload
        }),
      }
    case ETagsActionPoints.ADD_ACTIVE_TAG:
      return {
        ...tagsState,
        activeTags: [...tagsState.activeTags, action.payload],
      }
    case ETagsActionPoints.DELETE_ACTIVE_TAG:
      return {
        ...tagsState,
        activeTags: tagsState.activeTags.filter(
          (tag) => tag !== action.payload,
        ),
      }
    default: {
      return tagsState
    }
  }
}
