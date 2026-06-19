import {
  type ActionDispatch,
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useReducer,
} from 'react';
import type { ITag } from '@/shared/types/tag.types.ts';
import type { TActionTags } from '@/entities/tag/model/types.ts';
import { tagsReducer } from '@/entities/tag/model/tagsReducer.ts';
import { mockTags } from '@/entities/tag/model/mockTags.ts';

interface ITagsContext {
  tags: ITag[];
  activeTags: string[];
  dispatch: ActionDispatch<[action: TActionTags]>;
}

export const TagsContext = createContext<null | ITagsContext>(null);

export const TagsProvider = ({ children }: { children: ReactNode }) => {
  const [tagsState, dispatch] = useReducer(tagsReducer, {
    tags: mockTags,
    activeTags: [],
  });

  return (
    <TagsContext value={{ ...tagsState, dispatch }}>{children}</TagsContext>
  );
};

export function useTags(): ITagsContext {
  const context = useContext(TagsContext);
  if (!context) {
    throw new Error('useTags должен использоваться внутри TagsProvider');
  }
  return context;
}
