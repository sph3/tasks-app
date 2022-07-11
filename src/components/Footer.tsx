import { ArrowArcLeft, Trash } from 'phosphor-react';
import { AddButton } from './AddButton';

export const Footer = () => {
  return (
    <div className='flex justify-between items-center text-center fixed bottom-0 bg-gradient-to-b from-transparent to-ctp-base backdrop-blur-sm h-28 w-full px-8'>
      <div className='bg-ctp-surface1 bg-opacity-60 rounded-2xl h-12 w-12 flex items-center justify-center'>
        <span className='text-3xl text-ctp-text'>
          <ArrowArcLeft />
        </span>
      </div>
      <div className=''>
        <AddButton />
      </div>
      <div className='bg-ctp-red bg-opacity-20 rounded-2xl h-12 w-12 flex items-center justify-center'>
        <span className='text-ctp-red text-3xl'>
          <Trash />
        </span>
      </div>
    </div>
  );
};
