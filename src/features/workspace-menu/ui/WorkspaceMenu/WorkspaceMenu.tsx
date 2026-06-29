import ss from './WorkspaceMenu.module.scss';

import { Button, DatePicker, Segmented } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useWorkspace } from '@/entities/workspace/model/useWorkspace.ts';
import {
  DayCalendarIcon,
  MonthlyCalendarIcon,
  WeeklyCalendarIcon,
} from '@/assets/icons';
import { useNavigate } from 'react-router';

export const WorkspaceMenu = () => {
  const {
    date,
    actions: { toNextPeriod, toPreviousPeriod, toToday, moveTo },
  } = useWorkspace();
  const navigate = useNavigate();

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
        </div>
      </div>
      <div className={ss.infoHead}>
        <p className={ss.day}>{date.format('dddd, MMMM DD, YYYY')}</p>
        <p className={ss.week}>Week {date.week()}</p>
      </div>

      <Segmented<string>
        className={ss.segmented}
        options={[
          { value: 'day', label: 'Day', icon: <DayCalendarIcon /> },
          { value: 'week', label: 'Week', icon: <WeeklyCalendarIcon /> },
          { value: 'month', label: 'Month', icon: <MonthlyCalendarIcon /> },
        ]}
        onChange={(value) => {
          navigate(`/${value}`);
          // ! Придумать как определять тип воркспейса, через адресную строку либо стейт
        }}
      />
    </div>
  );
};
