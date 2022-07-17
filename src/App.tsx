import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Flavour } from './@types';
import { AuthContextProvider } from './contexts/auth-context';
import { FlavourContext } from './contexts/flavour-context';
import { MenuContext } from './contexts/menu-context';
import { Router } from './Router';

export const App = () => {
  const [flavour, setFlavour] = useState<Flavour>('ctp-latte');
  const [menuStatus, setMenuStatus] = useState(false);

  const handleSetFlavour = (flavour: Flavour) => {
    setFlavour(flavour);
    localStorage.setItem('flavour', flavour);
  };

  useEffect(() => {
    const storedFlavour = localStorage.getItem('flavour');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      if (storedFlavour && storedFlavour !== flavour) {
        // @ts-ignore
        handleSetFlavour(storedFlavour);
        return;
      }
      handleSetFlavour('ctp-mocha');
    }
  }, []);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <AuthContextProvider>
      <FlavourContext.Provider
        value={{ flavour, setFlavour: handleSetFlavour }}
      >
        <MenuContext.Provider value={{ status: menuStatus, toggleMenu }}>
          <div className={flavour}>
            <div className='bg-ctp-base min-h-screen'>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </div>
          </div>
        </MenuContext.Provider>
      </FlavourContext.Provider>
    </AuthContextProvider>
  );
};
