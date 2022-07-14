import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

export type Flavor = 'ctp-latte' | 'ctp-mocha' | 'ctp-frappe' | 'ctp-macchiato';

export const App = () => {
  const [flavor, setFlavor] = useState<Flavor>('ctp-latte');

  const getFlavor = (): Flavor => {
    return flavor;
  };

  const changeFlavor = (flavor: Flavor) => {
    setFlavor(flavor);
  };

  return (
    <div className={flavor}>
      <div className='bg-ctp-base min-h-screen'>
        <BrowserRouter>
          <Router getFlavor={getFlavor} setFlavor={setFlavor} />
        </BrowserRouter>
      </div>
    </div>
  );
};
