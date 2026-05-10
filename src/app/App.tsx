import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Day from '@/pages/Day'
import { ConfigProvider } from 'antd'
import useStyleTokens from '@/shared/libs/useStyleTokens.ts'

function App() {
  const { blueColor, radiusSM, bgPrimary, textPrimary } = useStyleTokens()
  console.log(radiusSM)
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: blueColor,
          colorText: textPrimary,
        },
        components: {
          Button: {
            borderRadius: Number(
              String(radiusSM)
                .slice(0, radiusSM.length - 2)
                .trim(),
            ),
            colorBgContainer: bgPrimary,
            colorPrimaryBorder: blueColor,
            lineWidthFocus: 2,
            lineWidthBold: 0,
          },
        },
      }}
    >
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
