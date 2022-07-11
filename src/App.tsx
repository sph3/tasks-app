import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { TaskView } from './components/TaskView';

export const App = () => {
  let [flavor, setFlavor] = useState('ctp-latte');

  return (
    <div className={flavor}>
      <div className='bg-ctp-base min-h-screen'>
        <Header />
        {/* <Main /> */}
        <TaskView />
        <Footer />
      </div>
    </div>
  );
};
