import ss from './Tag.module.scss'
import TagsMark from '@/shared/ui/TagsMark'
import type { ReactNode } from 'react'
interface Props {
  color: string
  children: ReactNode
}

export const Tag = ({ color, children }: Props) => {
  return (
    <p className={ss.tag}>
      <TagsMark color={color} /> <span>{children}</span>
    </p>
  )
}
