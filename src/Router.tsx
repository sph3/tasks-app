import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Main } from './pages/Main';
import { TaskView } from './pages/TaskView';

export const Router = () => {
  return (
    <Routes>
      {/* <Route path='' element={<Main />} /> */}
      <Route path='' element={<Home />} />
      <Route path='/task/:id' element={<TaskView />} />
    </Routes>
  );
};
