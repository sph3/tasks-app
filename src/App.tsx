import { useState } from 'react';
import { AddButton } from './components/AddButton';

export const App = () => {
  let [flavor, setFlavor] = useState('ctp-latte');

  return (
    <div className={flavor}>
      <div className='bg-ctp-base h-screen'>
        <AddButton />
      </div>
    </div>
  );
};
