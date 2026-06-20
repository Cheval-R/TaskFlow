import Aside from '@/widgets/Aside';
import ss from './Layout.module.scss';
import WorkSpace from '../../entities/workspace/ui';
import CreateTaskModal from '@/features/create-task-modal/ui/CreateTaskModal';

export const Layout = () => {
  return (
    <div className={ss.layout}>
      <Aside />
      <WorkSpace />
      <CreateTaskModal />
    </div>
  );
};
