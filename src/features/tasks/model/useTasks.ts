import { useState } from 'react'
import type { IntRange } from 'type-fest'
export interface ITask {
  id: string
  name: string
  description?: string
  // time: IntRange<0, 23>

  startCoordinate: number
  // endCoordinate: number
}
const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  function addTask(newTask: ITask) {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  return { tasks, addTask }
}

export { useTasks }
