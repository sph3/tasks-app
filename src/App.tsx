import { useState } from 'react';
import { AddButton } from './components/AddButton';
import { Greeting } from './components/Greeting';

export const App = () => {
  let [flavor, setFlavor] = useState('ctp-latte');

  return (
    <div className={flavor}>
      <div className='bg-ctp-base h-screen'>
        <Greeting />
        <AddButton />
      </div>
    </div>
  );
};
