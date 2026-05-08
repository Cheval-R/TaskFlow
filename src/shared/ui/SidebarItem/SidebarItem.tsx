import ss from './SidebarItem.module.scss'
import type { ReactNode } from 'react'

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
    <button
      type="button"
      className={`${ss.sidebarItem} ${active ? ss.active : ''} ${ss[size]}`}
      onClick={onClick}
    >
      {icon}
      <span className={ss.label}>{label}</span>
      <span className={ss.counter}>{count}</span>
    </button>
  )
}
