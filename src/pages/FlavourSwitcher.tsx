import { Header } from '../components/Header';
import { FlavourDemo } from '../components/FlavourDemo';
import { useContext } from 'react';
import { FlavourContext } from '../contexts/flavour-context';

export const FlavourSwitcher = () => {
  const { flavour } = useContext(FlavourContext);
  return (
    <>
      <Header pageTitle='Choose Your Theme' />
      <div className='p-4 w-full flex flex-col'>
        <h1 className={`text-${flavour}-text text-2xl font-bold`}>
          Available themes:
        </h1>
        <div className='flex justify-evenly gap-y-4 mt-4 items-center flex-wrap'>
          <FlavourDemo demoFlavour='latte' />
          <FlavourDemo demoFlavour='mocha' />
          <FlavourDemo demoFlavour='macchiato' />
          <FlavourDemo demoFlavour='frappe' />
        </div>
      </div>
    </>
  );
};
