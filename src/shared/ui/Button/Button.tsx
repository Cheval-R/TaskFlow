import ss from './Button.module.scss'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  icon?: { url: string; alt: string }
}

export const Button = ({ children, icon }: Props) => {
  return (
    <button type="button" className={ss.button}>
      {icon ? (
        <img
          className={ss.icon}
          src={icon?.url}
          alt={icon?.alt}
          width="25"
          height="25"
          loading="lazy"
        />
      ) : null}
      <span className={ss.title}>{children}</span>
    </button>
  )
}
