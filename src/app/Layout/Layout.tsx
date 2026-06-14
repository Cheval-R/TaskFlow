import Aside from '@/widgets/Aside'
import ss from './Layout.module.scss'
import WorkSpace from '@/widgets/WorkSpace'
import CreateTaskModal from '@/features/create-task-modal/ui/CreateTaskModal'
import type { Dayjs } from 'dayjs'

interface Props {
  date: Dayjs
}

export const Layout = ({ date }: Props) => {
  return (
    <div className={ss.layout}>
      <Aside />
      <WorkSpace date={date} />
      <CreateTaskModal />
    </div>
  )
}
