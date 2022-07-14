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

  const getFlavour = (): Flavour => {
    return flavour;
  };

  return (
    <div className={flavour}>
      <div className='bg-ctp-base min-h-screen'>
        <BrowserRouter>
          <Router getFlavour={getFlavour} setFlavour={setFlavour} />
        </BrowserRouter>
      </div>
    </div>
  );
};
