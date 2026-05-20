import ss from './CreateTaskModal.module.scss'
import { Controller, useForm } from 'react-hook-form'
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
import useTasks from '@/entities/task/model/useTasks.ts'
import type { ITag } from '@/shared/types/tag.types.ts'
import {
  convertMinutesToTime,
  convertPixelsToMinutes,
} from '@/shared/model/timeConvert.ts'

interface Props {
  yCoordinate: number
  toClose: () => void
}

export interface ICreateTaskForm {
  label: string
  description: string
  date: Dayjs
  timeRange: [Dayjs, Dayjs]
  tagValue: string
}

export const CreateTaskModal = ({ yCoordinate, toClose }: Props) => {
  const startTime = convertMinutesToTime(convertPixelsToMinutes(yCoordinate))
  const { addTaskHandler } = useTasks()

  const { control } = useForm<ICreateTaskForm>()
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
    <Form<ICreateTaskForm>
      name={'createTaskModal'}
      onFinish={(e: ICreateTaskForm) => {
        addTaskHandler({ ...e, id: crypto.randomUUID() })
      }}
      layout={'vertical'}
      className={ss.form}
      style={{ position: 'absolute', top: yCoordinate }}
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
            initialValue={[dayjs(startTime, 'HH:mm'), dayjs('12:15', 'HH:mm')]}
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

        <Form.Item>
          <Button htmlType={'submit'} type={'primary'}>
            Create Task
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  )
}
