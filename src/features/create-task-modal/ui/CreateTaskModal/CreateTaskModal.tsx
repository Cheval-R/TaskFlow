import ss from './CreateTaskModal.module.scss';
import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  Radio,
  Space,
  TimePicker,
  Typography,
} from 'antd';
import type { TimeRangePickerProps } from 'antd';
import { useState, useEffect } from 'react';
import formatMinuteToTime from '@/shared/model/formatMinuteToTime';
import Tag from '@/shared/ui/Tag';
import type { ITask } from '@/shared/types/task.types.ts';

import { useTasks } from '@/entities/task/model/useTasks';
import { useTags } from '@/entities/tag/model/useTags.ts';
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts';
import type { Dayjs } from 'dayjs';

export const CreateTaskModal = () => {
  const [timeDifference, setTimeDifference] = useState<string>('1h 00m');
  const { tags } = useTags();
  const { isCreateModalOpen, closeCreateTaskModal, createTaskFormValues } =
    useCreateTaskModal();
  const {
    actions: { addTask, updateTask },
  } = useTasks();

  const [form] = Form.useForm<ITask>();
  useEffect(() => {
    if (isCreateModalOpen) {
      form.setFieldsValue(createTaskFormValues);
    }
  }, [isCreateModalOpen, form, createTaskFormValues]);
  const onCalendarChangeHandler: TimeRangePickerProps['onChange'] = (time) => {
    if (!time) return;
    const startTime = time[0];
    const endTime = time[1];
    if (!startTime || !endTime) return;

    const diff = endTime.diff(startTime, 'minutes');
    setTimeDifference(formatMinuteToTime(diff));
  };

  return (
    <Form<ITask>
      variant={'underlined'}
      form={form}
      onFinish={(e: ITask) => {
        if (createTaskFormValues.id === '')
          addTask({ ...e, id: crypto.randomUUID() });
        else {
          if (e.timeRange[0].isSame(e.timeRange[1])) {
            e.timeRange[1].add(15, 'minute');
          }

          updateTask({ ...e, id: createTaskFormValues.id });
        }
        closeCreateTaskModal();
      }}
      layout={'vertical'}
      className={`${ss.form} ${isCreateModalOpen ? ss.isOpen : ''}`}
      initialValues={{ ...createTaskFormValues }}
    >
      <Flex gap={'medium'} vertical>
        <Typography.Title level={4}>Create Task</Typography.Title>
        <Form.Item
          name={'label'}
          label={'Task Name'}
          rules={[
            { required: true, message: 'Required field' },
            { max: 35, message: 'Максимум 35 символов' },
          ]}
        >
          <Input size={'large'} placeholder="Task title" />
        </Form.Item>
        <Form.Item name={'description'} label={'Description'}>
          <Input size={'large'} placeholder="Description" />
        </Form.Item>
        <Flex gap={'medium'} wrap={'wrap'}>
          <Form.Item
            name={'date'}
            label={'Date'}
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
            label={'Time Range'}
            rules={[
              { required: true, message: 'Required field' },
              {
                validator: (_, value: [Dayjs, Dayjs]) => {
                  if (!value || !value[0] || !value[1]) {
                    return Promise.resolve();
                  }

                  const [start, end] = value;

                  if (!end.isAfter(start) && !end.isSame(start)) {
                    return Promise.reject(
                      new Error(
                        'Время окончания должно быть позже времени начала',
                      ),
                    );
                  }

                  return Promise.resolve();
                },
              },
            ]}
          >
            <Space>
              <TimePicker.RangePicker
                minuteStep={15}
                showSecond={false}
                onChange={onCalendarChangeHandler}
              />
              <Button
                disabled
                size={'small'}
                className={ss.timeDuration}
                style={{ pointerEvents: 'none' }}
              >
                {timeDifference}
              </Button>
            </Space>
          </Form.Item>
        </Flex>

        <Form.Item
          name={'tagValue'}
          label={'Tags'}
          rules={[{ required: true, message: 'Required field' }]}
        >
          <Radio.Group className={ss.tagsGroup}>
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
        </Form.Item>

        <Flex justify={'space-between'}>
          <Form.Item>
            <Button htmlType={'submit'} type={'primary'}>
              {createTaskFormValues.id === '' ? 'Create' : 'Update'}
            </Button>
          </Form.Item>
          <Button
            danger={true}
            onClick={closeCreateTaskModal}
            htmlType={'button'}
          >
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Form>
  );
};
