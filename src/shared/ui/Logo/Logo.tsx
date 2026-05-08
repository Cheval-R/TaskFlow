import ss from './Logo.module.scss'

interface Props {
}

export const Logo = ({}: Props) => {
  return (
    <h1 className={ss.logo}>Task Flow</h1>
  )
}