import ss from './Input.module.scss'
import type { RefCallback, RefObject } from 'react'
import type { ChangeHandler } from 'react-hook-form'

interface Props {
  name: string
  ref: RefCallback<HTMLInputElement>
  value?: string
  onChange: ChangeHandler
  onBlur?: ChangeHandler
  placeholder?: string
}

export const Input = ({
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  ref,
}: Props) => {
  return (
    <label className={ss.wrapper}>
      <input ref={ref} className={ss.input} name={name} placeholder={' '} />
      {placeholder ? (
        <span className={ss.placeholder}>{placeholder}</span>
      ) : null}
    </label>
  )
}
