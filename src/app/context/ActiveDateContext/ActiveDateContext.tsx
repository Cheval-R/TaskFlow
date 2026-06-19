import { createContext, useContext } from 'react'
import type { Dayjs } from 'dayjs'

interface IActiveDate {
  type: 'day' | 'week' | 'month'
  date: Dayjs
}

export const ActiveDateContext = createContext<IActiveDate | null>(null)

export const useActiveDateContext = () => {
  const activeDateContext = useContext(ActiveDateContext)
  if (activeDateContext === null) {
    throw Error('ActiveDateContext out of context')
  }
  return activeDateContext
}
