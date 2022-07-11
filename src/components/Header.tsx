import { ArrowUUpLeft, List, Trash } from 'phosphor-react';

type HeaderProps = {
  pageTitle: 'Your Tasks' | 'Task View';
};

export const Header = ({ pageTitle }: HeaderProps) => {
  return (
    <div className='flex flex-row justify-between items-center text-center h-16 bg-ctp-mantle flex-wrap px-2'>
      <div className=''>
        <button
          className='text-xl text-ctp-text bg-ctp-surface0 w-10 h-10 rounded-lg flex text-center
          items-center justify-center outline-none hover:brightness-90 duration-100 focus:ring-ctp-overlay2 focus:ring-2'
        >
          {pageTitle === 'Task View' ? (
            <ArrowUUpLeft weight='bold' />
          ) : (
            <List weight='bold' />
          )}
        </button>
      </div>

      <div className=''>
        <span className='font-bold text-xl text-ctp-text'>{pageTitle}</span>
      </div>

      <div>
        {pageTitle === 'Task View' ? (
          <button
            className='text-xl text-ctp-red bg-ctp-red bg-opacity-10 w-10 h-10 rounded-lg flex text-center
            items-center justify-center outline-none hover:bg-opacity-30 duration-100 focus:ring-ctp-red focus:ring-2'
          >
            <Trash weight='bold' />
          </button>
        ) : (
          <span className='text-xl mr-12'></span>
        )}
      </div>
    </div>
  );
};
