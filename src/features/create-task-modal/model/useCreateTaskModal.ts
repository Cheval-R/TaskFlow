import { useState } from 'react'
import dayjs, { type Dayjs } from 'dayjs'

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
    date?: Dayjs
    timeRange?: [Dayjs, Dayjs]
    id?: string
  }) => {
    const formValues = {
      label: label || '',
      description: description || '',
      tagValue: tagValue || '',
      id: id || '',
      date: date || dayjs(),
      timeRange: timeRange || [dayjs(), dayjs()],
    }
    setCreateTaskFormValues(formValues)
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
