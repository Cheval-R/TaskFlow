import ss from './SidebarItem.module.scss'
import type { ReactNode } from 'react'
import { Badge, Button } from 'antd'
import TagsMark from '../TagsMark'

interface Props {
  count?: number | null
  active?: boolean
  color?: string
  icon?: ReactNode
  onClick: () => void
  children: ReactNode
}

export const SidebarItem = ({
  active,
  onClick,
  count = null,
  icon,
  children,
}: Props) => {
  return (
    <Button className={ss.sidebarItem} size={'medium'} icon={icon} ghost>
      <span className={ss.label}>{children}</span>
      <span className={ss.count}>{count}</span>
    </Button>
  )
}
