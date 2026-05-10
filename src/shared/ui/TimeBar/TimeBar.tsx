import ss from './TimeBar.module.scss'
interface Props {}

export const TimeBar = ({}: Props) => {
  let timeLine: string[] = []
  for (let i = 0; i <= 23; i++) {
    timeLine.push(`${i}:00`)
  }
  return (
    <div className={ss.timeBar}>
      {timeLine.map((hour) => {
        return (
          <span className={ss.hour} key={hour}>
            {hour}
          </span>
        )
      })}
    </div>
  )
}
