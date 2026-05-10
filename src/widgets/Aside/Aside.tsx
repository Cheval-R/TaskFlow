import ss from './Aside.module.scss'
import buttonStyle from '@/shared/ui/Button/Button.module.scss'
import Logo from '@/shared/ui/Logo'

import Navigation from '@/features/navigation/ui/Navigation'
import Tags from '@/features/tasks-tags/ui/Tags'
import PlusIcon from '@/assets/icons/plus.svg?react'
import { Button as AntButton } from 'antd'
import Button from '@/shared/ui/Button'
import { PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'

interface Props {}

export const Aside = ({}: Props) => {
  const [iconAnimated, setIconAnimated] = useState(false)
  return (
    <aside className={ss.aside}>
      <Logo />
      <AntButton
        type={'primary'}
        size={'large'}
        className={ss.btn}
        icon={
          <PlusIcon
            className={iconAnimated ? buttonStyle.animate : ''}
            onAnimationEnd={() => setIconAnimated(false)}
          />
        }
        iconPlacement={'start'}
        onClick={() => {
          setIconAnimated((prev) => !prev)
        }}
      >
        Add Task
      </AntButton>
      <Navigation />
      <Tags tags={[]} />
      <p>CALENDAR</p>
    </aside>
  )
}
