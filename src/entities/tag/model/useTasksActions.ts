import { ETagsActionPoints } from '@/entities/tag/model/types.ts'
import { useTags } from '@/entities/tag/model/TagsContext.tsx'
import type { ITag } from '@/shared/types/tag.types.ts'

export default function useTagsActions() {
  const { dispatch } = useTags()

  const addTagHandler = (newTag: ITag) => {
    dispatch({ type: ETagsActionPoints.ADD_TAG, payload: newTag })
  }

  const deleteTagHandler = (tag: ITag) => {
    dispatch({ type: ETagsActionPoints.DELETE_TAG, payload: tag })
  }

  const updateTagHandler = (tag: ITag) => {
    dispatch({ type: ETagsActionPoints.DELETE_TAG, payload: tag })
  }

  const addActiveTagHandler = (newActiveTag: string) => {
    dispatch({ type: ETagsActionPoints.ADD_ACTIVE_TAG, payload: newActiveTag })
  }

  const deleteActiveTagHandler = (inactiveTag: string) => {
    dispatch({
      type: ETagsActionPoints.DELETE_ACTIVE_TAG,
      payload: inactiveTag,
    })
  }

  return {
    addTagHandler,
    deleteTagHandler,
    updateTagHandler,
    addActiveTagHandler,
    deleteActiveTagHandler,
  }
}
