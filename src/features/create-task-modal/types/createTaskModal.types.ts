import { Dayjs } from 'dayjs'

export interface ICreateTaskModalControls {
  closeCreateTaskModal: () => void
  openCreateTaskModal: (values: {
    label?: string
    description?: string
    tagValue?: string
    date?: Dayjs
    timeRange?: [Dayjs, Dayjs]
    id?: string
  }) => void
  isCreateModalOpen: boolean
  toggleCreateTaskModal: () => void
}

export interface ICreateTaskModalFormValues {
  label?: string
  description?: string
  date?: Dayjs
  tagValue?: string
  timeRange?: [Dayjs, Dayjs]
  id?: string
}

export interface ICreateTaskModalContext extends ICreateTaskModalControls {
  values: {
    label: string
    description: string
    date: Dayjs
    timeRange: [Dayjs, Dayjs]
    id: string
  }
}
