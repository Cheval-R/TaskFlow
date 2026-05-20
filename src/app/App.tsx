import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Day from '@/pages/Day'
import { ConfigProvider } from 'antd'
import antdTheme from '@/shared/styles/antd-theme.ts'
import { useReducer } from 'react'
import {
  TasksContext,
  TasksDispatchContext,
} from '../entities/task/model/TasksContext'
import { tasksReducer } from '@/entities/task/model/tasksReducer.ts'
import dayjs from 'dayjs'

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, [
    {
      id: '1',
      label: 'Morning Routine',
      description: 'desc',
      tagValue: 'personal',
      timeRange: [dayjs('1:00', 'HH:mm'), dayjs('2:00', 'HH:mm')],
      date: dayjs(),
    },
  ])
  return (
    <ConfigProvider theme={antdTheme}>
      <TasksContext value={tasks}>
        <TasksDispatchContext value={dispatch}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Day />} />
              <Route path="day" element={<Day />} />
            </Route>
          </Routes>
        </TasksDispatchContext>
      </TasksContext>
    </ConfigProvider>
  )
}

export default App
