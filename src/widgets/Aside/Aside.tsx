import ss from './Aside.module.scss'
import buttonStyle from '@/shared/ui/Button/Button.module.scss'
import Logo from '@/shared/ui/Logo'

import Navigation from '@/features/navigation/ui/Navigation'
import Tags from '../../entities/tag/ui/Tags'
import PlusIcon from '@/assets/icons/plus.svg?react'
import { Button as AntButton } from 'antd'
import { useContext, useEffect, useReducer, useState } from 'react'
import dayjs from 'dayjs'
import { useTasksCounters } from '@/entities/task/model/useTasksCounters.ts'
import {
  useTasksContext,
  useTasksDispatchContext,
} from '@/entities/task/model/TasksContext.ts'
import useTasks from '@/entities/task/model/useTasks.ts'
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts'
import { useCreateTaskModalContext } from '@/features/create-task-modal/model/createTaskModalContext.ts'

interface Props {}

export const Aside = ({}: Props) => {
  const tasksCounters = useTasksCounters()
  const [iconAnimated, setIconAnimated] = useState(false)
  const { openCreateTaskModal } = useCreateTaskModalContext()
  return (
    <aside className={ss.aside}>
      <Logo className={ss.logo} />
      <div className={ss.content}>
        <AntButton
          type={'primary'}
          size={'medium'}
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
            openCreateTaskModal({
              date: dayjs(),
              timeRange: [dayjs(), dayjs().add(30, 'minutes')],
            })
          }}
        >
          Add Task
        </AntButton>
        <Navigation tasksCounters={tasksCounters} />
        <Tags tags={[]} />
        <p>CALENDAR</p>
      </div>
    </aside>
  )
}
