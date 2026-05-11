import ss from './CreateTaskModal.module.scss'
import { type ITask, useTasks } from '@/features/tasks/model/useTasks.ts'
import { Controller, useForm } from 'react-hook-form'
import tags from '@/entities/tags/tags.ts'
import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  Radio,
  TimePicker,
  type TimePickerProps,
  type TimeRangePickerProps,
  Typography,
} from 'antd'
import { useState } from 'react'
import dayjs from 'dayjs'
import TagsMark from '@/shared/ui/TagsMark'

interface Props {
  yCoordinate: number
  toClose: () => void
}

type TForm = {
  name: string
  date: string
}

export interface ICreateTaskForm {
  title: string
  description: string
  startTime: string
  taskType: string
}

function minuteToTime(minute: number) {
  if (minute < 60) return `0h ${minute}m`

  const hour = Math.floor(minute / 60)
  const min = String(((minute / 60) % 1) * 60).padStart(2, '0')
  return `${hour}h ${min}m`
}

export const CreateTaskModal = ({ yCoordinate, toClose }: Props) => {
  const { addTask } = useTasks()
  const { register } = useForm<ICreateTaskForm>()
  const [timeDifference, setTimeDifference] = useState<string>('0h 15m')

  const onCalendarChangeHandler: TimeRangePickerProps['onChange'] = (
    time,
    timeString,
  ) => {
    if (!time) return
    const startTime = time[0]
    const endTime = time[1]
    if (!startTime || !endTime) return
    const diff = endTime.diff(startTime, 'minutes')
    setTimeDifference(minuteToTime(diff))
  }

  return (
    <Form
      name={'createTaskModal'}
      onFinish={(e) => {
        console.log(e)
      }}
      layout={'vertical'}
      className={ss.form}
      style={{ position: 'absolute', top: yCoordinate }}
    >
      <Flex gap={'medium'} vertical={true}>
        <Typography.Title level={4}>Create Task</Typography.Title>
        <Form.Item
          name={'taskName'}
          rules={[{ required: true, message: 'Required field' }]}
        >
          <Input size={'large'} placeholder="Task title" />
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
            initialValue={[dayjs('12:00', 'HH:mm'), dayjs('12:15', 'HH:mm')]}
            rules={[{ required: true, message: 'Required field' }]}
          >
            <TimePicker.RangePicker
              // defaultValue={[dayjs('12:00', 'HH:mm'), dayjs('12:15', 'HH:mm')]}
              minuteStep={15}
              showSecond={false}
              onChange={onCalendarChangeHandler}
            />
          </Form.Item>

          <Form.Item name={'tag'}>
            <Radio.Group></Radio.Group>
          </Form.Item>

          <Button disabled size={'small'} className={ss.timeDuration}>
            {timeDifference}
          </Button>
        </Flex>

        <Form.Item name={'tag'} label={'Tags'} vertical={true}>
          <Flex gap={'medium'}>
            <Radio.Group defaultValue={tags[0].value}>
              {tags.map((tag) => (
                <Radio.Button
                  key={tag.value}
                  value={tag.value}
                  className={ss.radioButton}
                >
                  <TagsMark color={tag.color} />
                  {tag.label}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button htmlType={'submit'} type={'primary'}>
            Create Task
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  )
}
