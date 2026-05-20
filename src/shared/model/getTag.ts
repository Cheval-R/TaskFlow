import type { ITag } from '@/shared/types/tag.types.ts'
import tags from '@/entities/tag/model/tags.ts'

export default function getTag(tagValue: string): ITag {
  const tag = tags.find((tag) => {
    return tag.value === tagValue
  })

  if (!tag) throw Error('Tag not found')

  return tag
}
