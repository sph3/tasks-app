import { Route, Routes } from 'react-router-dom';
import { Flavour } from './App';
import { Create } from './components/Create';
import { Home } from './pages/Home';
import { Main } from './pages/Main';
import { FlavourSwitcher } from './pages/FlavourSwitcher';
import { TaskView } from './pages/TaskView';
import { NotFound } from './pages/NotFound';

type FlavourFunctions = {
  currentFlavour: Flavour;
  setFlavour: (flavour: Flavour) => void;
};

export const Router = ({ currentFlavour, setFlavour }: FlavourFunctions) => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/tasks' element={<Main />} />
      <Route path='/' element={<Home />} />
      <Route path='/tasks/new' element={<Create />} />
      <Route path='/tasks/:id' element={<TaskView />} />
      <Route
        path='/settings/themes'
        element={
          <FlavourSwitcher
            currentFlavour={currentFlavour}
            setFlavour={setFlavour}
          />
        }
      />
    </Routes>
  );
};
