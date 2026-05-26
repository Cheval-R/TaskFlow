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
    {
      id: '3',
      label: 'Evening Routine',
      description: 'desc',
      tagValue: 'health',
      timeRange: [dayjs('1:45', 'HH:mm'), dayjs('2:30', 'HH:mm')],
      date: dayjs(),
    },
    {
      id: '2',
      label: 'Day Routine',
      description: 'desc',
      tagValue: 'business',
      timeRange: [dayjs('1:15', 'HH:mm'), dayjs('3:00', 'HH:mm')],
      date: dayjs(),
    },
    {
      id: '4',
      label: 'Routine',
      description: 'desc',
      tagValue: 'health',
      timeRange: [dayjs('1:00', 'HH:mm'), dayjs('2:30', 'HH:mm')],
      date: dayjs(),
    },
    {
      id: '5',
      label: 'Night',
      description: 'desc',
      tagValue: 'work',
      timeRange: [dayjs('2:30', 'HH:mm'), dayjs('3:30', 'HH:mm')],
      date: dayjs(),
    },
    {
      id: '11111',
      label: '111Morning Routine111',
      description: '111desc111',
      tagValue: 'personal',
      timeRange: [dayjs('11:00', 'HH:mm'), dayjs('12:00', 'HH:mm')],
      date: dayjs(),
    },
    {
      id: '11311',
      label: '111Evening Routine111',
      description: '111desc111',
      tagValue: 'health',
      timeRange: [dayjs('11:45', 'HH:mm'), dayjs('12:30', 'HH:mm')],
      date: dayjs(),
    },
    {
      id: '11211',
      label: '111Day Routine111',
      description: '111desc111',
      tagValue: 'business',
      timeRange: [dayjs('11:15', 'HH:mm'), dayjs('13:00', 'HH:mm')],
      date: dayjs(),
    },
    {
      id: '11411',
      label: '111Routine111',
      description: '111desc111',
      tagValue: 'health',
      timeRange: [dayjs('11:00', 'HH:mm'), dayjs('12:30', 'HH:mm')],
      date: dayjs(),
    },
    {
      id: '11511',
      label: '111Night111',
      description: '111desc111',
      tagValue: 'work',
      timeRange: [dayjs('12:30', 'HH:mm'), dayjs('13:30', 'HH:mm')],
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
