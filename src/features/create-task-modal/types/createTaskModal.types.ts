import { Dayjs } from 'dayjs';
import * as React from 'react';
import type { ITask } from '@/shared/types/task.types.ts';

export interface ICreateTaskModalControls {
  closeCreateTaskModal: () => void;
  openCreateTaskModal: (values: {
    label?: string;
    description?: string;
    tagValue?: string;
    date?: Dayjs;
    timeRange?: [Dayjs, Dayjs];
    id?: string;
  }) => void;
  isCreateModalOpen: boolean;
  toggleCreateTaskModal: () => void;
}

export interface ICreateTaskModalFormValues {
  label?: string;
  description?: string;
  date?: Dayjs;
  tagValue?: string;
  timeRange?: [Dayjs, Dayjs];
  id?: string;
}

export interface ICreateTaskModalState {
  values: ITask;
  isOpen: boolean;
}

export interface ICreateTaskModalContext {
  values: {
    label: string;
    description: string;
    date: Dayjs;
    timeRange: [Dayjs, Dayjs];
    id: string;
  };
  isOpen: boolean;
  setter: React.Dispatch<React.SetStateAction<ICreateTaskModalState>>;
}
