import Aside from '@/widgets/Aside'
import ss from './Layout.module.scss'
import WorkSpace from '@/widgets/WorkSpace'

export const Layout = () => {
  return (
    <div className={ss.layout}>
      <Aside />
      <WorkSpace />
    </div>
  )
}
