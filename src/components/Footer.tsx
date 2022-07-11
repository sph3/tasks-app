import { ArrowArcLeft, Trash } from 'phosphor-react';
import { AddButton } from './AddButton';

export const Footer = () => {
  return (
    <div className='flex justify-between items-center text-center fixed bottom-0 bg-gradient-to-b from-transparent to-ctp-base backdrop-blur-sm h-28 w-full px-8'>
      <button className='bg-ctp-surface1 bg-opacity-50 rounded-2xl h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-opacity-100 duration-100 focus:ring-2 focus:ring-ctp-overlay2'>
        <span className='text-3xl text-ctp-text'>
          <ArrowArcLeft />
        </span>
      </button>
      <button className='cursor-pointer'>
        <AddButton />
      </button>
      <button className='bg-ctp-red bg-opacity-20 rounded-2xl h-12 w-12 flex items-center justify-center hover:bg-opacity-40 duration-100 outline-none cursor-pointer focus:ring-2 focus:ring-ctp-red'>
        <span className='text-ctp-red text-3xl'>
          <Trash />
        </span>
      </button>
    </div>
  );
};
