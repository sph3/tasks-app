import { useContext } from 'react';
import { FlavourContext } from '../contexts/flavour-context';

export const useFlavour = () => {
  const { flavour, setFlavour } = useContext(FlavourContext);
  return { flavour, setFlavour };
};
