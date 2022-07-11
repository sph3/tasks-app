import { List } from 'phosphor-react';

type HeaderProps = {
  pageTitle: 'Your Tasks' | 'Task View';
};

export const Header = ({ pageTitle }: HeaderProps) => {
  return (
    <div className='flex flex-row justify-between items-center text-center h-16 bg-ctp-mantle flex-wrap px-1'>
      <div className='w-[calc(100%/3)]'>
        <button className='text-ctp-text bg-ctp-surface0 w-10 h-10 rounded-lg flex text-center items-center justify-center outline-none hover:brightness-90 duration-100 focus:ring-ctp-overlay2 focus:ring-2'>
          <List size={28} />
        </button>
      </div>

      <div className='w-[calc(100%/3)]'>
        <span className='font-bold text-xl text-ctp-text'>{pageTitle}</span>
      </div>
      <div className='w-[calc(100%/3)]'>
        <span className='font-bold text-xl'></span>
      </div>
    </div>
  );
};
