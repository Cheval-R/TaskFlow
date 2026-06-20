import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Day from '@/pages/Day';
import dayjs from 'dayjs';
import AppProvider from '@/app/providers/AppProvider';
import { useWorkspace } from '@/entities/workspace/model/useWorkspace.ts';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Day />} />
          <Route path="day" element={<Day />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
