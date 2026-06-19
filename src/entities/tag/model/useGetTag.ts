import { useTags } from './TagsContext.tsx'
import type { ITag } from '@/shared/types/tag.types.ts'

export default function useGetTag(tagValue: string): ITag {
  const { tags } = useTags()
  const tag = tags.find((tag) => {
    return tag.value === tagValue
  })

  if (!tag) throw Error('Tag not found')

  return tag
}
