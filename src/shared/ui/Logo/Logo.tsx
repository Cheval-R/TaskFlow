import ss from './Logo.module.scss'

interface Props {
  className?: string
}

export const Logo = ({ className }: Props) => {
  return <h1 className={className}>Task Flow</h1>
}
