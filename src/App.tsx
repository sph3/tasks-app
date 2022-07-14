import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

export type Flavour =
  | 'ctp-latte'
  | 'ctp-mocha'
  | 'ctp-frappe'
  | 'ctp-macchiato';

export const App = () => {
  const [flavour, setFlavour] = useState<Flavour>('ctp-latte');

  return (
    <div className={flavour}>
      <div className='bg-ctp-base min-h-screen'>
        <BrowserRouter>
          <Router
            currentFlavour={flavour}
            setFlavour={setFlavour}
          />
        </BrowserRouter>
      </div>
    </div>
  );
};
