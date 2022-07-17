import { Header } from '../components/Header';
import { FlavourDemo } from '../components/FlavourDemo';

export const FlavourSwitcher = () => {
  return (
    <>
      <Header pageTitle='Choose Your Theme' />
      <div className='p-4 w-full flex flex-col'>
        <h1 className='text-ctp-text text-2xl font-bold'>Available themes:</h1>
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
