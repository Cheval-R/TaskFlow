import ss from './CreateTaskModal.module.scss'
import { useTasks } from '@/features/tasks/model/useTasks.ts'
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
import formatMinuteToTime from '@/shared/model/formatMinuteToTime'
import Tag from '@/shared/ui/Tag'

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

export const CreateTaskModal = ({ yCoordinate, toClose }: Props) => {
  const { addTask } = useTasks()
  const { register } = useForm<ICreateTaskForm>()
  const [timeDifference, setTimeDifference] = useState<string>('00:15')

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
    <Form
      name={'createTaskModal'}
      onFinish={(e) => {
        console.log(e)
      }}
      layout={'vertical'}
      className={ss.form}
      style={{ position: 'absolute', top: yCoordinate }}
    >
      <Flex gap={'medium'} vertical>
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

          <Button disabled size={'small'} className={ss.timeDuration}>
            {timeDifference}
          </Button>
        </Flex>

        <Form.Item name={'tag'} label={'Tags'} vertical>
          <Flex gap={'medium'}>
            <Radio.Group defaultValue={tags[0].value}>
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

        <Form.Item>
          <Button htmlType={'submit'} type={'primary'}>
            Create Task
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  )
}
