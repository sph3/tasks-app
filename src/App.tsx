import { useState } from 'react';
import { AddButton } from './components/AddButton';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const App = () => {
  let [flavor, setFlavor] = useState('ctp-latte');

  return (
    <div className={flavor}>
      <div className='bg-ctp-base h-screen'>
        <Header />
        <Main />
        <AddButton />
      </div>
    </div>
  );
};
