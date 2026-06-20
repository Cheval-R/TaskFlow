import { ETagsActionPoints } from '@/entities/tag/model/types.ts';
import { useContext } from 'react';
import { TagsContext } from '@/entities/tag/model/TagsContext.tsx';
import type { ITag } from '@/shared/types/tag.types.ts';

interface IUseTagsReturns {
  tags: ITag[];
  activeTags: string[];
  actions: {
    addTag: (tag: ITag) => void;
    deleteTag: (tag: ITag) => void;
    updateTag: (tag: ITag) => void;
    addActiveTag: (newActiveTag: string) => void;
    deleteActiveTag: (inactiveTag: string) => void;
  };
}

export function useTags(): IUseTagsReturns {
  const context = useContext(TagsContext);
  if (!context) {
    throw new Error('useTags должен использоваться внутри TagsProvider');
  }
  const { tags, activeTags, dispatch } = context;

  return {
    tags,
    activeTags,
    actions: {
      addTag: (tag: ITag) => {
        dispatch({ type: ETagsActionPoints.ADD_TAG, payload: tag });
      },

      deleteTag: (tag: ITag) => {
        dispatch({ type: ETagsActionPoints.DELETE_TAG, payload: tag });
      },

      updateTag: (tag: ITag) => {
        dispatch({ type: ETagsActionPoints.UPDATE_TAG, payload: tag });
      },

      addActiveTag: (newActiveTag: string) => {
        dispatch({
          type: ETagsActionPoints.ADD_ACTIVE_TAG,
          payload: newActiveTag,
        });
      },

      deleteActiveTag: (inactiveTag: string) => {
        dispatch({
          type: ETagsActionPoints.DELETE_ACTIVE_TAG,
          payload: inactiveTag,
        });
      },
    },
  };
}
