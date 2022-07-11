import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
