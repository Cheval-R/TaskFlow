import ss from './Aside.module.scss'
import buttonStyle from '@/shared/ui/Button/Button.module.scss'
import Logo from '@/shared/ui/Logo'

import Navigation from '@/features/navigation/ui/Navigation'
import Tags from '../../entities/tag/ui/Tags'
import PlusIcon from '@/assets/icons/plus.svg?react'
import { Button as AntButton } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useContext, useEffect, useState } from 'react'
import { useTasksContext } from '@/entities/task/model/TasksContext.ts'
import type { ITask, ITasksCounters } from '@/shared/types/task.types.ts'
import dayjs from 'dayjs'

interface Props {}

function getNumberOfTasks(tasks: ITask[]): ITasksCounters {
  let today = 0
  let week = 0
  let month = 0
  const total = tasks.length
  for (let task of tasks) {
    if (task.date.isSame(dayjs(), 'day')) {
      today++
    }
    if (task.date.isSame(dayjs(), 'week')) {
      week++
    }
    if (task.date.isSame(dayjs(), 'month')) {
      month++
    }
  }
  return { total, today, week, month }
}

export const Aside = ({}: Props) => {
  const tasks = useTasksContext()
  const [tasksCounters, setTasksCounters] = useState<ITasksCounters>({
    total: 0,
    today: 0,
    week: 0,
    month: 0,
  })
  useEffect(() => {
    setTasksCounters((prevState) => ({
      ...prevState,
      ...getNumberOfTasks(tasks),
    }))
  }, [tasks])
  const [iconAnimated, setIconAnimated] = useState(false)
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
