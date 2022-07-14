import { Flavor } from '../App';

type FlavorProps = {
  flavor: Flavor;
  selected: boolean;
};

export const FlavorDemo = ({ flavor, selected }: FlavorProps) => {
  let flavorName = flavor.split('-')[1];
  flavorName = flavorName.charAt(0).toUpperCase() + flavorName.slice(1);

  const selectedClasses = 'border-4 border-ctp-subtext1';

  return (
    <div
      className={`${flavor} ${
        selected ? selectedClasses : ''
      } py-4 h-[6.5rem] text-center w-36 bg-ctp-base rounded-2xl flex flex-col justify-around items-center shadow-lg`}
    >
      <div className='flex flex-col justify-center items-center'>
        <span className='text-ctp-text font-bold text-xl leading-4'>{flavorName}</span>
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
