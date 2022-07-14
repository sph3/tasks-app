import { Header } from '../components/Header';
import { FlavorDemo } from '../components/FlavorDemo';
import { Flavor } from '../App';

type ThemeSwitcherProps = {
  getFlavor: () => Flavor;
  setFlavor: (flavor: Flavor) => void;
};

export const Switch = ({ getFlavor, setFlavor }: ThemeSwitcherProps) => {
  const currentFlavor = getFlavor();

  const setFlavorHandler = (newFlavor: Flavor) => {
    setFlavor(newFlavor);
  };

  return (
    <>
      <Header pageTitle='Choose Your Theme' />
      <div className='p-4 w-full flex flex-col'>
        <h1 className='text-ctp-text text-2xl font-bold'>Available themes:</h1>
        <div className='flex justify-evenly gap-y-4 mt-4 items-center flex-wrap'>
          <FlavorDemo
            selected={currentFlavor === 'ctp-latte'}
            flavor='ctp-latte'
          />
          <FlavorDemo
            selected={currentFlavor === 'ctp-mocha'}
            flavor='ctp-mocha'
          />
          <FlavorDemo
            selected={currentFlavor === 'ctp-macchiato'}
            flavor='ctp-macchiato'
          />
          <FlavorDemo
            selected={currentFlavor === 'ctp-frappe'}
            flavor='ctp-frappe'
          />
        </div>
      </div>
    </>
  );
};
