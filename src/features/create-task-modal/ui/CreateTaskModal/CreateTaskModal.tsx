import ss from './CreateTaskModal.module.scss';
import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  Radio,
  TimePicker,
  Typography,
} from 'antd';
import type { TimeRangePickerProps } from 'antd';
import { useState, useEffect } from 'react';
import formatMinuteToTime from '@/shared/model/formatMinuteToTime';
import Tag from '@/shared/ui/Tag';
import type { ITask } from '@/shared/types/task.types.ts';

import { useCreateTaskModalContext } from '@/features/create-task-modal/model/createTaskModalContext.ts';
import { useTasks } from '@/entities/task/model/useTasks';
import { useTags } from '@/entities/tag/model/useTags.ts';

export const CreateTaskModal = () => {
  const [timeDifference, setTimeDifference] = useState<string>('01:00');
  const { tags } = useTags();
  const { isCreateModalOpen, closeCreateTaskModal, values } =
    useCreateTaskModalContext();
  const {
    actions: { addTask, updateTask },
  } = useTasks();

  const [form] = Form.useForm<ITask>();
  useEffect(() => {
    if (isCreateModalOpen) {
      form.setFieldsValue(values);
    }
  }, [isCreateModalOpen, form, values]);
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
      form={form}
      onFinish={(e: ITask) => {
        if (values.id === '') addTask({ ...e, id: crypto.randomUUID() });
        else {
          updateTask({ ...e, id: values.id });
        }
        closeCreateTaskModal();
      }}
      layout={'vertical'}
      className={`${ss.form} ${isCreateModalOpen ? ss.isOpen : ''}`}
      initialValues={{ ...values }}
    >
      <Flex gap={'medium'} vertical>
        <Typography.Title level={4}>Create Task</Typography.Title>
        <Form.Item
          name={'label'}
          rules={[
            { required: true, message: 'Required field' },
            { max: 35, message: 'Максимум 35 символов' },
          ]}
        >
          <Input size={'large'} placeholder="Task title" />
        </Form.Item>
        <Form.Item
          name={'description'}
          rules={[{ required: true, message: 'Required field' }]}
        >
          <Input size={'large'} placeholder="Description" />
        </Form.Item>
        <Flex gap={'medium'} wrap={'wrap'}>
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
              {values.id === '' ? 'Create' : 'Update'}
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
