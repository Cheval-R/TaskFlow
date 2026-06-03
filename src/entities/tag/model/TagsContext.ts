import { createContext, type Dispatch, useContext } from 'react'
import type { ITag } from '@/shared/types/tag.types.ts'
import type { TActionTags } from '@/entities/tag/model/types.ts'

export const TagsContext = createContext<null | ITag[]>(null)
export const TagsDispatchContext = createContext<Dispatch<TActionTags> | null>(
  null,
)

export const useTagsContext = () => {
  const tags = useContext(TagsContext)
  if (tags === null) throw Error('Tags out of context')
  return tags
}
export const useTagsDispatchContext = () => {
  const tagsDispatch = useContext(TagsDispatchContext)
  if (tagsDispatch === null) throw Error('TagsDispatch out of context')
  return tagsDispatch
}
