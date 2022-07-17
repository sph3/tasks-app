import { Route, Routes } from 'react-router-dom';
import { NewTask } from './pages/NewTask';
import { Home } from './pages/Home';
import { Main } from './pages/Main';
import { FlavourSwitcher } from './pages/FlavourSwitcher';
import { TaskView } from './pages/TaskView';
import { NotFound } from './pages/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/tasks' element={<Main />} />
      <Route path='/' element={<Home />} />
      <Route path='/tasks/new' element={<NewTask />} />
      <Route path='/tasks/:id' element={<TaskView />} />
      <Route path='/settings/themes' element={<FlavourSwitcher />} />
    </Routes>
  );
};
