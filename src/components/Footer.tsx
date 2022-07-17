import { ArrowArcLeft, Plus, Trash } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { SquareButton } from './SquareButton';

export const Footer = () => {
  return (
    <div
      className='flex justify-between items-center text-center fixed bottom-0 left-1/2 -translate-x-1/2
        bg-gradient-to-b
        from-transparent to-ctp-base backdrop-blur-sm h-28 w-full px-8'
    >
      <SquareButton
        action=''
        focusRingColor='focus:ring-ctp-text'
        translucid={true}
        color='bg-ctp-overlay2'
        textColor='text-ctp-text'
        size={2}
        content={<ArrowArcLeft />}
      />
      <Link
        to='/tasks/new'
        className='bg-ctp-blue rounded-full shadow-lg w-20 h-20 flex justify-center items-center
        hover:brightness-90 duration-100 focus:ring-2 outline-none cursor-pointer focus:ring-ctp-sky'
      >
        <Plus size={38} color='#fff' weight='bold' />
      </Link>
      <SquareButton
        action=''
        focusRingColor='focus:ring-ctp-red'
        translucid={true}
        color='bg-ctp-red'
        textColor='text-ctp-red'
        size={2}
        content={<Trash />}
      />
    </div>
  );
};
