import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { TaskView } from './pages/TaskView';
import { Router } from './Router';

export const App = () => {
  let [flavor, setFlavor] = useState('ctp-latte');

  return (
    <div className={flavor}>
      <div className='bg-ctp-base min-h-screen'>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
};
