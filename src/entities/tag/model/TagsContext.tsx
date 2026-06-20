import { createContext, type ReactNode, useReducer } from 'react';
import type { ITag } from '@/shared/types/tag.types.ts';
import {
  ETagsActionPoints,
  type ITagsContext,
} from '@/entities/tag/model/types.ts';
import { tagsReducer } from '@/entities/tag/model/tagsReducer.ts';
import { mockTags } from '@/entities/tag/model/mockTags.ts';

export const TagsContext = createContext<null | ITagsContext>(null);

export const TagsProvider = ({ children }: { children: ReactNode }) => {
  const [tagsState, dispatch] = useReducer(tagsReducer, {
    tags: mockTags,
    activeTags: [],
  });

  return (
    <TagsContext.Provider
      value={{
        ...tagsState,
        dispatch,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
};
