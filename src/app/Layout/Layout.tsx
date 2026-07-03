import Aside from '@/widgets/Aside';
import ss from './Layout.module.scss';
import WorkSpace from '../../entities/workspace/ui';
import CreateTaskModal from '@/features/create-task-modal/ui/CreateTaskModal';
import TaskSidebar from '../../features/task-details/ui/TaskDetailsMenu';

export const Layout = () => {
  return (
    <div className={ss.layout}>
      <Aside />
      <WorkSpace />
      <CreateTaskModal />
      <TaskSidebar />
    </div>
  );
};
