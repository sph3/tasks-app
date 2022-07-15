import { createContext } from 'react';

type MenuContextType = {
  status: boolean;
  toggleMenu: () => void;
};

export const MenuContext = createContext({} as MenuContextType);
