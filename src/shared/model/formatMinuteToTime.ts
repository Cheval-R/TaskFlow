export default function minuteToTime(minute: number) {
  if (minute < 60) return `00:${minute}`

  const hour = String(Math.floor(minute / 60)).padStart(2, '0')
  const min = String(((minute / 60) % 1) * 60).padStart(2, '0')
  return `${hour}:${min}`
}
