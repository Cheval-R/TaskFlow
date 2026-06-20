import ss from './AddTaskForm.module.scss';

import type { ITag } from '@/shared/types/tag.types.ts';
import { Button, ColorPicker, Flex, Form, Input } from 'antd';
import type { Color } from 'antd/es/color-picker';
import { useTags } from '@/entities/tag/model/useTags.ts';
interface Props {}

export const AddTaskForm = ({}: Props) => {
  const [tagForm] = Form.useForm<ITag>();
  const { activeTags, addTag } = useTags();
  return (
    <Form<ITag>
      form={tagForm}
      onFinish={(values: ITag) => {
        if (activeTags.includes(values.label.toLocaleLowerCase())) {
          // Узнать как сделать валидацию на наличие такого тега
          alert('Такой тег уже существует');
          return;
        }
        addTag({
          value: values.label.toLocaleLowerCase(),
          label: values.label,
          color: values.color,
        });
      }}
    >
      <Flex gap={'small'} align={'center'}>
        <Form.Item
          name={'color'}
          rules={[{ required: true, message: 'Required field' }]}
          getValueFromEvent={(color: Color) => color.toHexString()}
        >
          <ColorPicker className={ss.color} size={'small'} format={'hex'} />
        </Form.Item>
        <Form.Item
          name={'label'}
          rules={[
            { required: true, message: 'Required field' },
            { max: 15, message: 'Max 15 symbols' },
          ]}
        >
          <Input className={ss.input} color={'purple'} />
        </Form.Item>
        <Button
          className={ss.button}
          htmlType={'submit'}
          variant={'solid'}
          color={'primary'}
        >
          Add Tag
        </Button>
      </Flex>
    </Form>
  );
};
