import { useState } from 'react'
import type { ICreateTaskModalFormValues } from '@/features/create-task-modal/types/createTaskModal.types.ts'
import dayjs, { type Dayjs } from 'dayjs'
import Day from '@/pages/Day'
import type { ITask } from '@/shared/types/task.types.ts'

export function useCreateTaskModal() {
  const [createTaskFormValues, setCreateTaskFormValues] = useState<{
    label: string
    description: string
    date: Dayjs
    timeRange: [Dayjs, Dayjs]
    tagValue: string
    id: string
  }>({
    label: '',
    description: '',
    date: dayjs(),
    timeRange: [dayjs(), dayjs()],
    tagValue: '',
    id: crypto.randomUUID(),
  })

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const toggleCreateTaskModal = () => {
    setIsCreateModalOpen((prevState) => !prevState)
  }

  const openCreateTaskModal = ({
    label,
    description,
    tagValue,
    date,
    timeRange,
    id,
  }: {
    label?: string
    description?: string
    tagValue?: string
    date: Dayjs
    timeRange: [Dayjs, Dayjs]
    id?: string
  }) => {
    const formValues = {
      label: label || '',
      description: description || '',
      tagValue: tagValue || '',
      id: id || '',
      date,
      timeRange,
    }
    console.log(id)
    setCreateTaskFormValues(formValues)
    console.log(createTaskFormValues)
    setIsCreateModalOpen(true)
  }
  const closeCreateTaskModal = () => {
    setIsCreateModalOpen(false)
  }
  return {
    toggleCreateTaskModal,
    openCreateTaskModal,
    closeCreateTaskModal,
    isCreateModalOpen,
    createTaskFormValues,
  }
}
