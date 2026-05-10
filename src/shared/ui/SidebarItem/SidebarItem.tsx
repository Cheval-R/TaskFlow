import ss from './SidebarItem.module.scss'
import type { ReactNode } from 'react'
import { Button } from 'antd'

interface Props {
  icon: ReactNode
  label: string
  count?: number
  active?: boolean
  size?: 'small' | 'medium' | 'large'
  onClick: () => void
}

export const SidebarItem = ({
  active,
  icon,
  onClick,
  count,
  label,
  size = 'medium',
}: Props) => {
  return (
    <Button variant={'outlined'} className={ss.sidebarItem}>
      <span className={ss.icon}>{icon}</span>
      <span className={ss.label}>{label}</span>
      <span className={ss.counter}>{count}</span>
    </Button>

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
