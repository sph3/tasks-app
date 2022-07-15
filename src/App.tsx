import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MenuContext } from './contexts/menu-context';
import { Router } from './Router';

export type Flavour =
  | 'ctp-latte'
  | 'ctp-mocha'
  | 'ctp-frappe'
  | 'ctp-macchiato';

export const App = () => {
  const [flavour, setFlavour] = useState<Flavour>('ctp-latte');
  const [menuStatus, setMenuStatus] = useState(false);

  useEffect(() => {
    const storedFlavour = localStorage.getItem('flavour');
    // @ts-ignore
    if (storedFlavour !== flavour) setFlavour(storedFlavour);
  }, []);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <MenuContext.Provider value={{ status: menuStatus, toggleMenu }}>
      <div className={flavour}>
        <div className='bg-ctp-base min-h-screen'>
          <BrowserRouter>
            <Router currentFlavour={flavour} setFlavour={setFlavour} />
          </BrowserRouter>
        </div>
      </div>
    </MenuContext.Provider>
  );
};
