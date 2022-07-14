import { Flavour } from '../App';

type FlavourDemoProps = {
  flavour: Flavour;
  selected: boolean;
};

export const FlavourDemo = ({ flavour, selected }: FlavourDemoProps) => {
  let flavourName = flavour.split('-')[1];
  flavourName = flavourName.charAt(0).toUpperCase() + flavourName.slice(1);

  const selectedClasses = 'border-4 border-ctp-subtext1';

  return (
    <div
      className={`${flavour} ${
        selected ? selectedClasses : ''
      } py-4 h-[6.5rem] text-center w-36 bg-ctp-base rounded-2xl flex flex-col justify-around items-center shadow-lg`}
    >
      <div className='flex flex-col justify-center items-center'>
        <span className='text-ctp-text font-bold text-xl leading-4'>{flavourName}</span>
        {selected ? (
          <span className='text-ctp-subtext0'> (selected)</span>
        ) : (
          ''
        )}
      </div>

      <div className='flex justify-center items-center gap-1'>
        <span className='w-5 h-5 rounded-2xl bg-ctp-red'></span>
        <span className='w-5 h-5 rounded-2xl bg-ctp-blue'></span>
        <span className='w-5 h-5 rounded-2xl bg-ctp-green'></span>
        <span className='w-5 h-5 rounded-2xl bg-ctp-yellow'></span>
        <span className='w-5 h-5 rounded-2xl bg-ctp-mauve'></span>
      </div>
    </div>
  );
};
