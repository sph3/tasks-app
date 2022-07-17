import { MouseEvent, useContext, useState } from 'react';
import { Flavour } from '../@types';
import { FlavourContext } from '../contexts/flavour-context';

type FlavourDemoProps = {
  demoFlavour: Flavour;
};

export const FlavourDemo = ({ demoFlavour }: FlavourDemoProps) => {
  const { flavour, setFlavour } = useContext(FlavourContext);
  const [selected, setSelected] = useState<boolean>(demoFlavour === flavour);

  let flavourName = demoFlavour.charAt(0).toUpperCase() + demoFlavour.slice(1);

  if (flavourName === 'Frappe') flavourName = 'Frappé';

  const selectedClasses = `border-4 border-${demoFlavour}-subtext1`;

  const setFlavourHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.setItem('flavour', demoFlavour);
    setFlavour(demoFlavour);
  };

  return (
    <button
      onClick={setFlavourHandler}
      className={`${
        selected ? selectedClasses : ''
      } py-4 h-[6.5rem] outline-none text-center w-36 bg-${demoFlavour}-base rounded-2xl flex flex-col justify-around items-center shadow-lg`}
    >
      <div className='flex flex-col justify-center items-center'>
        <span
          className={`text-${demoFlavour}-text font-bold text-xl leading-4`}
        >
          {flavourName}
        </span>
        {selected ? (
          <span className={`text-${demoFlavour}-subtext0`}> (selected)</span>
        ) : (
          ''
        )}
      </div>

      <div className='flex justify-center items-center gap-1'>
        <span className={`w-5 h-5 rounded-2xl bg-${demoFlavour}-red`}></span>
        <span className={`w-5 h-5 rounded-2xl bg-${demoFlavour}-blue`}></span>
        <span className={`w-5 h-5 rounded-2xl bg-${demoFlavour}-green`}></span>
        <span className={`w-5 h-5 rounded-2xl bg-${demoFlavour}-yellow`}></span>
        <span className={`w-5 h-5 rounded-2xl bg-${demoFlavour}-mauve`}></span>
      </div>
    </button>
  );
};
