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

  const handleSetFlavour = (flavour: Flavour) => {
    localStorage.setItem('flavour', flavour);
    setFlavour(flavour);
  };

  useEffect(() => {
    const storedFlavour = localStorage.getItem('flavour');
    if (storedFlavour && storedFlavour !== flavour) {
      // @ts-ignore
      handleSetFlavour(storedFlavour);
      return;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('flavour', 'mocha');
      setFlavour('mocha');
    }
  }, []);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <AuthContextProvider>
      <FlavourContext.Provider
        value={{ flavour: flavour, setFlavour: handleSetFlavour }}
      >
        <MenuContext.Provider value={{ status: menuStatus, toggleMenu }}>
          <div className={`bg-${flavour}-base min-h-screen`}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </div>
        </MenuContext.Provider>
      </FlavourContext.Provider>
    </AuthContextProvider>
  );
};
