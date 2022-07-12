import { Route, Routes } from 'react-router-dom';
import { Create } from './components/Create';
import { Home } from './pages/Home';
import { Main } from './pages/Main';
import { TaskView } from './pages/TaskView';

export const Router = () => {
  return (
    <Routes>
      <Route path='/tasks' element={<Main />} />
      <Route path='' element={<Home />} />
      <Route path='/tasks/new' element={<Create />} />
      <Route path='/tasks/:id' element={<TaskView />} />
    </Routes>
  );
};
