import ss from './Logo.module.scss'

interface Props {
  className?: string
}

export const Logo = ({ className }: Props) => {
  return (
    <div className={ss.logo}>
      <img src={'/logo-with-text.png'} alt={''} />
      {/*<h1 className={className}>Task Flow</h1>*/}
    </div>
  )
}
