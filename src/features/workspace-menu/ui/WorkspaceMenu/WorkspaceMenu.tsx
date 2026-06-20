import ss from './WorkspaceMenu.module.scss';

import {
  Button,
  Calendar,
  DatePicker,
  type DatePickerProps,
  Radio,
} from 'antd';
import {
  CalendarOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import dayjs, { type Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { useWorkspace } from '@/entities/workspace/model/useWorkspace.ts';
import updateLocale from 'dayjs/plugin/updateLocale';

export const WorkspaceMenu = () => {
  const {
    date,
    actions: { toNextPeriod, toPreviousPeriod, toToday, moveTo },
  } = useWorkspace();
  dayjs.extend(weekOfYear);
  dayjs.extend(updateLocale);
  dayjs.updateLocale('en', {
    weekStart: 1, // 0 — воскресенье, 1 — понедельник
  });

  return (
    <div className={ss.menu}>
      <div className={ss.navigation}>
        <Button
          shape={'square'}
          icon={<LeftOutlined />}
          onClick={toPreviousPeriod}
        />
        <Button
          shape={'square'}
          icon={<RightOutlined />}
          onClick={toNextPeriod}
        />
        <Button onClick={toToday}>Today</Button>
        <div className={ss.datepicker}>
          <DatePicker
            className={ss.calendar}
            value={date}
            allowClear={false}
            onChange={(date) => {
              if (date !== null) moveTo(date);
            }}
          />
          {/*<Calendar*/}
          {/*  className={ss.calendar}*/}
          {/*  fullscreen={false}*/}
          {/*  showWeek={true}*/}
          {/*  value={date}*/}
          {/*  onSelect={moveTo}*/}
          {/*/>*/}
        </div>
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
  );
};
