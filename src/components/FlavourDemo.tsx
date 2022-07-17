import { Flavour } from '../@types';
import { useFlavour } from '../hooks/use-flavour';

type FlavourDemoProps = {
  demoFlavour: Flavour;
};

export const FlavourDemo = ({ demoFlavour }: FlavourDemoProps) => {
  const { flavour, setFlavour } = useFlavour();

  const selected = flavour === demoFlavour;

  let flavourName = demoFlavour.split('-')[1];
  flavourName = flavourName.charAt(0).toUpperCase() + flavourName.slice(1);

  if (flavourName === 'Frappe') {
    flavourName = 'Frappé';
  }

  const selectedClasses = 'border-4 border-ctp-subtext1';

  return (
    <button
      onClick={() => {
        setFlavour(demoFlavour);
      }}
      className={`${demoFlavour} ${
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
