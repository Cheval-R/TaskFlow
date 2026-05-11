import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Day from '@/pages/Day'
import { ConfigProvider } from 'antd'
import antdTheme from '@/shared/styles/antd-theme.ts'

function App() {
  return (
    <ConfigProvider theme={antdTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Day />} />
          <Route path="day" element={<Day />} />
        </Route>
      </Routes>
    </ConfigProvider>
  )
}

export default App
