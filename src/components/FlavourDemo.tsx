import { MouseEvent } from 'react';
import { Flavour } from '../App';

type FlavourDemoProps = {
  flavour: Flavour;
  selected: boolean;
  setFlavour: (flavour: Flavour) => void;
};

export const FlavourDemo = ({
  flavour,
  selected,
  setFlavour,
}: FlavourDemoProps) => {
  let flavourName = flavour.split('-')[1];
  flavourName = flavourName.charAt(0).toUpperCase() + flavourName.slice(1);

  if (flavourName === 'Frappe') {
    flavourName = flavourName.slice(0, -1) + 'é';
  }

  const selectedClasses = 'border-4 border-ctp-subtext1';

  const setFlavourHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.setItem('flavour', flavour);
    setFlavour(flavour);
  };

  return (
    <button
      onClick={setFlavourHandler}
      className={`${flavour} ${
        selected ? selectedClasses : ''
      } py-4 h-[6.5rem] outline-none text-center w-36 bg-ctp-base rounded-2xl flex flex-col justify-around items-center shadow-lg`}
    >
      <div className='flex flex-col justify-center items-center'>
        <span className='text-ctp-text font-bold text-xl leading-4'>
          {flavourName}
        </span>
        {selected ? <span className='text-ctp-subtext0'> (selected)</span> : ''}
      </div>

      <div className='flex justify-center items-center gap-1'>
        <span className='w-5 h-5 rounded-2xl bg-ctp-red'></span>
        <span className='w-5 h-5 rounded-2xl bg-ctp-blue'></span>
        <span className='w-5 h-5 rounded-2xl bg-ctp-green'></span>
        <span className='w-5 h-5 rounded-2xl bg-ctp-yellow'></span>
        <span className='w-5 h-5 rounded-2xl bg-ctp-mauve'></span>
      </div>
    </button>
  );
};
