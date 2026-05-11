import ss from './TagsMark.module.scss'

interface Props {
  color: string
}

type TagsColor = 'red' | 'green' | 'yellow' | 'blue'

export const TagsMark = ({ color }: Props) => {
  console.log(color)
  return (
    <span
      className={ss.circle}
      style={{
        backgroundColor: color,
      }}
    />
  )
}
