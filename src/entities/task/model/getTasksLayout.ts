import type { ITask } from '@/shared/types/task.types.ts'
import task from '@/entities/task/ui/Task'
import type { ITaskLayout } from '@/entities/task/model/types.ts'
import type { Dayjs } from 'dayjs'

export default function getTasksLayout(tasks: ITask[]) {
  const tempTasks = tasks.map((task) => task)
  sortTasks(tempTasks)
  console.log('sorted', tempTasks)
  groupingTasks(tempTasks)
}

function sortTasks(tasks: ITask[]) {
  tasks.sort((a, b) => {
    const startTimes = [a.timeRange[0], b.timeRange[0]]
    const endTimes = [a.timeRange[1], b.timeRange[1]]

    const difference = startTimes[0].diff(startTimes[1])

    if (difference === 0) {
      console.log(endTimes[0].format('HH:mm'))
      console.log(endTimes[1].format('HH:mm'))

      return endTimes[1].diff(endTimes[0])
    }

    return difference
  })
}

function groupingTasks(tasks: ITask[]): ITaskLayout[] {
  const returnedTasks: ITaskLayout[] = []

  const tasksGroup: ITask[] = []
  let groupEnd: number | undefined = undefined

  tasks.forEach((task) => {
    if (!groupEnd) {
      groupEnd = getMinutesFromStartOfDay(task.timeRange[1])
      tasksGroup.push(task)
    } else if (getMinutesFromStartOfDay(task.timeRange[0]) < groupEnd) {
      tasksGroup.push(task)
      groupEnd = Math.max(groupEnd, getMinutesFromStartOfDay(task.timeRange[1]))
    } else {
      // расскладываем текущую группу на колонки и начинаем новую
    }
  })
  sortTaskGroupByColumns(tasksGroup)
  console.log('grouped', tasksGroup)
  return returnedTasks
}
interface ITaskWithColumnIndex extends ITask {
  columnIndex: number
}
function sortTaskGroupByColumns(tasks: ITask[]) {
  const columnsEnds: number[] = []

  const sortedTasks = tasks.map((task) => {
    const taskStart = getMinutesFromStartOfDay(task.timeRange[0])
    const taskEnd = getMinutesFromStartOfDay(task.timeRange[1])

    if (!columnsEnds.length) {
      columnsEnds[columnsEnds.length] = taskEnd
      return { columnIndex: 0, ...task }
    } else {
      for (let i = 0; i < columnsEnds.length; i++) {
        if (columnsEnds[i] <= taskStart) {
          columnsEnds[i] = taskEnd
          return { columnIndex: i, ...task }
        }
      }
      columnsEnds[columnsEnds.length] = taskEnd
      return { columnIndex: columnsEnds.length - 1, ...task }
    }
  })

  calculateGroupColumnsWidth(sortedTasks, columnsEnds.length)
}

function calculateGroupColumnsWidth(
  groupedTasks: ITaskWithColumnIndex[],
  columnCount: number,
): ITaskLayout[] {
  return groupedTasks.map((task) => {
    const columnWidth = 100 / columnCount
    const leftPosition = task.columnIndex * columnWidth
    return { ...task, columnWidth, leftPosition }
  })
}

const getMinutesFromStartOfDay = (time: Dayjs) => {
  return time.hour() * 60 + time.minute()
}
