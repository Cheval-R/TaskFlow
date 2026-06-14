import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Day from '@/pages/Day'
import dayjs from 'dayjs'
import AppProvider from '@/app/providers/AppProvider'

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout date={dayjs()} />}>
          <Route path="" element={<Day date={dayjs()} />} />
          <Route path="day" element={<Day date={dayjs()} />} />
        </Route>
      </Routes>
    </AppProvider>
  )
}

export default App
