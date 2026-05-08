// import ss from './NavigationIcon.module.scss'
interface Props {
  alt: string
  src: string
  width: string
  height: string
}

export const NavigationIcon = ({ src, alt, height, width }: Props) => {
  return <img src={src} alt={alt} height={height} width={width}></img>
}
