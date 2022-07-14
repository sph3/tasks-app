import { Header } from '../components/Header';
import { FlavourDemo } from '../components/FlavourDemo';
import { Flavour } from '../App';

type FlavourSwitcherProps = {
  getFlavour: () => Flavour;
  setFlavour: (flavour: Flavour) => void;
};

export const ThemeSwitcher = ({
  getFlavour,
  setFlavour,
}: FlavourSwitcherProps) => {
  const currentFlavour = getFlavour();

  const setFlavourHandler = (newFlavour: Flavour) => {
    setFlavour(newFlavour);
  };

  return (
    <>
      <Header pageTitle='Choose Your Theme' />
      <div className='p-4 w-full flex flex-col'>
        <h1 className='text-ctp-text text-2xl font-bold'>Available themes:</h1>
        <div className='flex justify-evenly gap-y-4 mt-4 items-center flex-wrap'>
          <FlavourDemo
            setFlavour={setFlavour}
            selected={currentFlavour === 'ctp-latte'}
            flavour='ctp-latte'
          />
          <FlavourDemo
            setFlavour={setFlavour}
            selected={currentFlavour === 'ctp-mocha'}
            flavour='ctp-mocha'
          />
          <FlavourDemo
            setFlavour={setFlavour}
            selected={currentFlavour === 'ctp-macchiato'}
            flavour='ctp-macchiato'
          />
          <FlavourDemo
            setFlavour={setFlavour}
            selected={currentFlavour === 'ctp-frappe'}
            flavour='ctp-frappe'
          />
        </div>
      </div>
    </>
  );
};
