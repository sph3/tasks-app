import { List } from 'phosphor-react';

export const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center text-center h-16 bg-ctp-crust flex-wrap px-1'>
      <div className='w-[calc(100%/3)]'>
        <button className='bg-ctp-surface1 w-10 h-10 rounded-lg flex text-center items-center justify-center outline-none hover:brightness-90 duration-100 focus:ring-ctp-overlay2 focus:ring-2'>
          <List size={28} color='#4c4f69' />
        </button>
      </div>

      <div className='w-[calc(100%/3)]'>
        <span className='font-bold text-xl text-ctp-text'>Your tasks</span>
      </div>
      <div className='w-[calc(100%/3)]'>
        <span className='font-bold text-xl'></span>
      </div>
    </div>
  );
};
