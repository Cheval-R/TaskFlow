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
import {
  TagsContext,
  TagsDispatchContext,
} from '@/entities/tag/model/TagsContext.ts'
import { tagsReducer } from '@/entities/tag/model/tagsReducer.ts'
import { CreateTaskModalContext } from '@/features/create-task-modal/model/createTaskModalContext.ts'
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts'

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, [
    {
      id: '1',
      label: 'Morning Routine',
      description: 'desc',
      tagValue: 'personal',
      timeRange: [dayjs('0:45', 'HH:mm'), dayjs('1:45', 'HH:mm')],
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
      timeRange: [dayjs('2:30', 'HH:mm'), dayjs('3:15', 'HH:mm')],
      date: dayjs(),
    },
    {
      id: '4',
      label: 'RoutineRoutine Routine ',
      description: 'desc',
      tagValue: 'health',
      timeRange: [dayjs('3:15', 'HH:mm'), dayjs('3:45', 'HH:mm')],
      date: dayjs(),
    },
    {
      id: '5',
      label: 'Night',
      description: 'desc',
      tagValue: 'work',
      timeRange: [dayjs('3:45', 'HH:mm'), dayjs('4:00', 'HH:mm')],
      date: dayjs(),
    },
    {
      id: '11111',
      label: '111Morning Routine111',
      description: '111desc111',
      tagValue: 'personal',
      timeRange: [dayjs('1:00', 'HH:mm'), dayjs('5:00', 'HH:mm')],
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
  const [tags, tagsDispatch] = useReducer(tagsReducer, [
    { label: 'Work', value: 'work', color: '#306DEB' },
    { label: 'Personal', value: 'personal', color: '#60B462' },
    { label: 'Business', value: 'business', color: '#9771e8' },
    { label: 'Health', value: 'health', color: '#ed995a' },
    { label: 'Study', value: 'study', color: '#f1ca51' },
  ])

  const {
    closeCreateTaskModal,
    openCreateTaskModal,
    isCreateModalOpen,
    toggleCreateTaskModal,
    createTaskFormValues,
  } = useCreateTaskModal()
  return (
    <ConfigProvider theme={antdTheme}>
      <CreateTaskModalContext
        value={{
          closeCreateTaskModal,
          openCreateTaskModal,
          isCreateModalOpen,
          toggleCreateTaskModal,
          values: createTaskFormValues,
        }}
      >
        <TagsContext value={tags}>
          <TagsDispatchContext value={tagsDispatch}>
            <TasksContext value={tasks}>
              <TasksDispatchContext value={tasksDispatch}>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route path="" element={<Day date={dayjs()} />} />
                    <Route path="day" element={<Day date={dayjs()} />} />
                  </Route>
                </Routes>
              </TasksDispatchContext>
            </TasksContext>
          </TagsDispatchContext>
        </TagsContext>
      </CreateTaskModalContext>
    </ConfigProvider>
  )
}

export default App
