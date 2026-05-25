import ss from './CreateTaskModal.module.scss'
import tags from '../../../../entities/tag/model/tags.ts'
import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  Radio,
  TimePicker,
  type TimeRangePickerProps,
  Typography,
} from 'antd'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import formatMinuteToTime from '@/shared/model/formatMinuteToTime'
import Tag from '@/shared/ui/Tag'
import {
  convertMinutesToTime,
  convertPixelsToMinutes,
} from '@/shared/model/timeConvert.ts'
import type { ITask } from '@/shared/types/task.types.ts'

interface Props {
  yCoordinate: number
  toClose: () => void
  name: string
  initialValues?: ITask
  id?: string
  onSubmitHandler: (e: ITask) => void
}

export interface ICreateTaskForm {
  label: string
  description: string
  date: Dayjs
  timeRange: [Dayjs, Dayjs]
  tagValue: string
}

function convertMinutesToDayjs(minutes: number) {
  return dayjs(convertMinutesToTime(convertPixelsToMinutes(minutes)), 'HH:mm')
}

export const CreateTaskModal = ({
  yCoordinate,
  toClose,
  name,
  initialValues,
  onSubmitHandler,
  id,
}: Props) => {
  function createDefaultInitialValues() {
    return {
      timeRange: [
        convertMinutesToDayjs(yCoordinate),
        convertMinutesToDayjs(yCoordinate).add(60, 'minute'),
      ],
      label: '',
      description: '',
      date: '',
      tagValue: '',
    }
  }

  const initialFormValues = initialValues
    ? initialValues
    : createDefaultInitialValues()

  const [timeDifference, setTimeDifference] = useState<string>('01:00')

  const onCalendarChangeHandler: TimeRangePickerProps['onChange'] = (
    time,
    timeString,
  ) => {
    if (!time) return
    const startTime = time[0]
    const endTime = time[1]
    if (!startTime || !endTime) return
    const diff = endTime.diff(startTime, 'minutes')
    setTimeDifference(formatMinuteToTime(diff))
  }

  return (
    <Form<ITask>
      name={name}
      onFinish={(e: ITask) => {
        onSubmitHandler({ ...e, id: id ? id : crypto.randomUUID() })
        toClose()
      }}
      layout={'vertical'}
      className={ss.form}
      style={{ position: 'absolute', top: yCoordinate + 10, left: '125px' }}
      initialValues={initialFormValues}
    >
      <Flex gap={'medium'} vertical>
        <Typography.Title level={4}>Create Task</Typography.Title>
        <Form.Item
          name={'label'}
          rules={[{ required: true, message: 'Required field' }]}
        >
          <Input size={'large'} placeholder="Task title" />
        </Form.Item>
        <Form.Item
          name={'description'}
          rules={[{ required: true, message: 'Required field' }]}
        >
          <Input size={'large'} placeholder="Description" />
        </Form.Item>
        <Flex gap={'medium'}>
          <Form.Item
            name={'date'}
            rules={[{ required: true, message: 'Required field' }]}
          >
            <DatePicker
              placeholder="Select date"
              format="ddd · DD MMM YYYY"
              className={ss.datepicker}
              size={'medium'}
            />
          </Form.Item>

          <Form.Item
            name={'timeRange'}
            // initialValue={[initialStartTime, initialEndTime]}
            rules={[{ required: true, message: 'Required field' }]}
          >
            <TimePicker.RangePicker
              minuteStep={15}
              showSecond={false}
              onChange={onCalendarChangeHandler}
            />
          </Form.Item>

          <Button disabled size={'small'} className={ss.timeDuration}>
            {timeDifference}
          </Button>
        </Flex>

        <Form.Item name={'tagValue'} label={'Tags'}>
          <Flex gap={'medium'}>
            <Radio.Group>
              {tags.map((tag) => (
                <Radio.Button
                  key={tag.value}
                  value={tag.value}
                  className={ss.radioButton}
                >
                  <Tag color={tag.color}>{tag.label}</Tag>
                </Radio.Button>
              ))}
            </Radio.Group>
          </Flex>
        </Form.Item>

        <Flex justify={'space-between'}>
          <Form.Item>
            <Button htmlType={'submit'} type={'primary'}>
              Create Task
            </Button>
          </Form.Item>
          <Button danger={true} onClick={toClose} htmlType={'button'}>
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Form>
  )
}
