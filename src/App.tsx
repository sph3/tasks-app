import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Flavour } from './@types';
import { AuthContextProvider } from './contexts/auth-context';
import { FlavourContext } from './contexts/flavour-context';
import { MenuContext } from './contexts/menu-context';
import { Router } from './Router';

export const App = () => {
  const [flavour, setFlavour] = useState<Flavour>('latte');
  const [menuStatus, setMenuStatus] = useState(false);

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setFlavour('mocha');
  }

  useEffect(() => {
    const storedFlavour = localStorage.getItem('flavour');
    // @ts-ignore
    if (storedFlavour !== flavour) setFlavour(storedFlavour);
  }, []);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <AuthContextProvider>
      <FlavourContext.Provider value={{ flavour: flavour, setFlavour }}>
        <MenuContext.Provider value={{ status: menuStatus, toggleMenu }}>
          <div className='bg-ctp-base min-h-screen'>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </div>
        </MenuContext.Provider>
      </FlavourContext.Provider>
    </AuthContextProvider>
  );
};
