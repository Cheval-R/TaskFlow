import ss from './TagsIcon.module.scss'
interface Props {
  color: 'red' | 'green' | 'yellow' | 'blue'
}

export const TagsIcon = ({ color }: Props) => {
  return <span className={`${ss.circle} ${ss[color]}`}></span>
}
