import ss from './CreateTaskModal.module.scss'
import { type ITask, useTasks } from '@/features/tasks/model/useTasks.ts'
import { Controller, useForm } from 'react-hook-form'
import Input from '@/shared/ui/Input'
import DatePicker from '@/shared/ui/DatePicker'

interface Props {
  yCoordinate: number
  toClose: () => void
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className={ss.form}
      style={{ position: 'absolute', top: yCoordinate }}
    >
      <legend>Create Task</legend>
      <Input
        {...register('title', {
          required: { value: true, message: 'required' },
        })}
        placeholder={'Task title'}
      />
    </form>
  )
}
