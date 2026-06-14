import ss from './WorkSpaceMenu.module.scss'
import { Button, Radio } from 'antd'
import {
  CalendarOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import {} from '@/assets/icons'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
interface Props {
  date: Dayjs
}

export const WorkSpaceMenu = ({ date }: Props) => {
  dayjs.extend(weekOfYear)
  return (
    <div className={ss.menu}>
      <div className={ss.navigation}>
        <Button shape={'square'} icon={<LeftOutlined />} />
        <Button shape={'square'} icon={<RightOutlined />} />
        <Button>Today</Button>
        <Button shape={'square'} icon={<CalendarOutlined />} />
      </div>
      <div className={ss.infoHead}>
        <p className={ss.day}>{date.format('dddd, MMMM DD, YYYY')}</p>
        <p className={ss.week}>Week {date.week()}</p>
      </div>
      <Radio.Group className={ss.showType} size={'large'}>
        <Radio.Button value={'day'}>Day</Radio.Button>
        <Radio.Button value={'week'}>Week</Radio.Button>
        <Radio.Button value={'month'}>Month</Radio.Button>
      </Radio.Group>
    </div>
  )
}
