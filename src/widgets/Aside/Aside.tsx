import ss from './Aside.module.scss'
import Logo from '../../shared/ui/Logo'
import Button from '../../shared/ui/Button'
import plusIcon from '@/assets/icons/plus.svg'
import Navigation from '../../features/workspace-navigation/ui/Navigation'
import Tags from '../../features/tasks-tags/ui/Tags'

interface Props {}

export const Aside = ({}: Props) => {
  return (
    <aside className={ss.aside}>
      <Logo />
      <Button icon={{ alt: 'Знак плюс', url: plusIcon }}>Add Task</Button>
      <Navigation />
      <Tags />
    </aside>
  )
}
