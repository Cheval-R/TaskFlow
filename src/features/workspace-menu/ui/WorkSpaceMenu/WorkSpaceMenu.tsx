import ss from './WorkSpaceMenu.module.scss'
import { ArrowIcon } from '@/assets/icons'
import { Button } from 'antd'
import {
  CalendarOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import {} from '@/assets/icons'
interface Props {}

export const WorkSpaceMenu = ({}: Props) => {
  return (
    <div className={ss.menu}>
      <div className={ss.navigation}>
        <Button shape={'square'} icon={<LeftOutlined />} />
        <Button shape={'square'} icon={<RightOutlined />} />
        <Button>Today</Button>
        <Button shape={'square'} icon={<CalendarOutlined />} />
      </div>
      <div></div>
    </div>
  )
}
