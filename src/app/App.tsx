import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import AppProvider from '@/app/providers/AppProvider';
import Workspace from '@/entities/workspace/ui';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={'/day'} replace />} />
          <Route path={':workspaceType'} element={<Workspace />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
