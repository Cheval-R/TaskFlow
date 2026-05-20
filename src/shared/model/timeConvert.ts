import useStyleTokens from '@/shared/libs/useStyleTokens.ts'

const { hourSize } = useStyleTokens()

export function convertMinutesToPixel(minutes: number) {
  return (minutes / 60) * hourSize
}

export function convertPixelsToMinutes(pixels: number) {
  return (pixels * 60) / hourSize
}

export function convertMinutesToTime(minutes: number) {
  const hour = Math.floor(minutes / 60)
  const hourString = String(hour).padStart(2, '0')
  const minuteString = String(minutes - hour * 60).padStart(2, '0')
  return `${hourString}:${minuteString}`
}
