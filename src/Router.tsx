import { Route, Routes } from 'react-router-dom';
import { NewTask } from './pages/NewTask';
import { LandingPage } from './pages/LandingPage';
import { MainPage } from './pages/MainPage';
import { FlavourSwitcher } from './pages/FlavourSwitcher';
import { TaskView } from './pages/TaskView';
import { NotFound } from './pages/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/tasks' element={<MainPage />} />
      <Route path='/' element={<LandingPage />} />
      <Route path='/tasks/new' element={<NewTask />} />
      <Route path='/tasks/:id' element={<TaskView />} />
      <Route path='/settings/themes' element={<FlavourSwitcher />} />
    </Routes>
  );
};
