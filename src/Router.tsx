import { Route, Routes } from 'react-router-dom';
import { Flavor } from './App';
import { Create } from './components/Create';
import { Home } from './pages/Home';
import { Main } from './pages/Main';
import { Switch } from './pages/Switch';
import { TaskView } from './pages/TaskView';

type FlavorFunctions = {
  getFlavor: () => Flavor;
  setFlavor: (flavor: Flavor) => void;
};

export const Router = ({ getFlavor, setFlavor }: FlavorFunctions) => {
  return (
    <Routes>
      <Route path='/tasks' element={<Main />} />
      <Route path='' element={<Home />} />
      <Route path='/tasks/new' element={<Create />} />
      <Route path='/tasks/:id' element={<TaskView />} />
      <Route
        path='themes'
        element={<Switch getFlavor={getFlavor} setFlavor={setFlavor} />}
      />
    </Routes>
  );
};
