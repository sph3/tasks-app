import { createContext } from 'react';
import { Flavour } from '../@types';

type FlavourContextType = {
  flavour: Flavour;
  setFlavour: (flavour: Flavour) => void;
};

export const FlavourContext = createContext({} as FlavourContextType);
