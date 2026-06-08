import Aside from '@/widgets/Aside'
import ss from './Layout.module.scss'
import WorkSpace from '@/widgets/WorkSpace'
import CreateTaskModal from '@/features/create-task-modal/ui/CreateTaskModal'
import { useCreateTaskModalContext } from '@/features/create-task-modal/model/createTaskModalContext.ts'

export const Layout = () => {
  const { values } = useCreateTaskModalContext()
  return (
    <div className={ss.layout}>
      <Aside />
      <WorkSpace />
      <CreateTaskModal />
    </div>
  )
}
