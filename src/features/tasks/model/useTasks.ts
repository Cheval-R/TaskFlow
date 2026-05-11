import { useState } from 'react'
import type { ITask } from '@/features/tasks/model/task.types.ts'

const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  function addTask(newTask: ITask) {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  return { tasks, addTask }
}

export { useTasks }
