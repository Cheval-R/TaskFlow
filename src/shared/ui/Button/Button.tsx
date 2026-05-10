import ss from './Button.module.scss'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  icon?: ReactNode
  onClick: () => void
}

export const Button = ({ children, icon, onClick }: Props) => {
  return (
    <button type="button" className={ss.button} onClick={onClick}>
      <span className={ss.icon}>{icon ? icon : null}</span>
      <span className={ss.title}>{children}</span>
    </button>
  )
}
