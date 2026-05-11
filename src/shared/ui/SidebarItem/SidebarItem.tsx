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
  color,
  children,
}: Props) => {
  return (
    <Badge
      count={count}
      size={'small'}
      color={color}
      className={ss.sidebarWrapper}
    >
      <Button className={ss.sidebarItem} size={'medium'} icon={icon} ghost>
        <span className={ss.label}>{children}</span>
        <span className={ss.count}>{count}</span>
      </Button>
    </Badge>

    // <button
    //   type="button"
    //   className={`${ss.sidebarItem} ${active ? ss.active : ''} ${ss[size]}`}
    //   onClick={onClick}
    // >
    //   <span className={ss.icon}>{icon}</span>
    //   <span className={ss.label}>{label}</span>
    //   <span className={ss.counter}>{count}</span>
    // </button>
  )
}
