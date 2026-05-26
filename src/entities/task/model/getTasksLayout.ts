import type { ITask } from '@/shared/types/task.types.ts'
import type { ITaskLayout } from '@/entities/task/model/types.ts'
import type { Dayjs } from 'dayjs'

export default function getTasksLayout(tasks: ITask[], wrapperWidth: number) {
  const tempTasks = tasks.map((task) => task)
  return groupingTasks(sortTasks(tempTasks), wrapperWidth)
}

function sortTasks(tasks: ITask[]) {
  const tempArr = tasks.map((task) => task)
  return tempArr.sort((a, b) => {
    const startTimes = [a.timeRange[0], b.timeRange[0]]
    const endTimes = [a.timeRange[1], b.timeRange[1]]

    const difference = startTimes[0].diff(startTimes[1])

    if (difference === 0) return endTimes[1].diff(endTimes[0])

    return difference
  })
}

function groupingTasks(tasks: ITask[], wrapperWidth: number): ITaskLayout[] {
  let returnedTasks: ITaskLayout[] = []

  let tasksGroup: ITask[] = []
  let groupEnd: number | undefined = undefined

  for (const task of tasks) {
    if (!groupEnd) {
      groupEnd = getMinutesFromStartOfDay(task.timeRange[1])
      tasksGroup.push(task)
    } else if (getMinutesFromStartOfDay(task.timeRange[0]) < groupEnd) {
      tasksGroup.push(task)
      groupEnd = Math.max(groupEnd, getMinutesFromStartOfDay(task.timeRange[1]))
    } else {
      // расскладываем текущую группу на колонки и начинаем новую
      returnedTasks = [
        ...returnedTasks,
        ...sortTaskGroupByColumns(tasksGroup, wrapperWidth),
      ]
      tasksGroup = [task]
      groupEnd = Math.max(groupEnd, getMinutesFromStartOfDay(task.timeRange[1]))
    }
  }
  returnedTasks = [
    ...returnedTasks,
    ...sortTaskGroupByColumns(tasksGroup, wrapperWidth),
  ]

  return returnedTasks
}
interface ITaskWithColumnIndex extends ITask {
  columnIndex: number
}
function sortTaskGroupByColumns(tasks: ITask[], wrapperWidth: number) {
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

  return calculateGroupColumnsWidth(
    sortedTasks,
    columnsEnds.length,
    wrapperWidth,
  )
}

function calculateGroupColumnsWidth(
  groupedTasks: ITaskWithColumnIndex[],
  columnCount: number,
  wrapperWidth: number,
): ITaskLayout[] {
  const tasksGap = 10
  const columnWidth =
    (wrapperWidth - (columnCount + 1) * tasksGap) / columnCount
  return groupedTasks.map((task, index) => {
    const leftPosition =
      task.columnIndex * columnWidth + (task.columnIndex + 1) * tasksGap
    return { ...task, columnWidth, leftPosition }
  })
}

const getMinutesFromStartOfDay = (time: Dayjs) => {
  return time.hour() * 60 + time.minute()
}
