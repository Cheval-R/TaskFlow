import ss from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={ss.logo}>
      <img src={'/logo-with-text.png'} alt={''} />
    </div>
  )
}
