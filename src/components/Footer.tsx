import { ArrowArcLeft, Plus, Trash } from 'phosphor-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FlavourContext } from '../contexts/flavour-context';
import { SquareButton } from './SquareButton';

export const Footer = () => {
  const { flavour } = useContext(FlavourContext);
  return (
    <div
      className={`flex justify-between items-center text-center fixed bottom-0 left-1/2 -translate-x-1/2
        bg-gradient-to-b
        from-transparent to-${flavour}-base backdrop-blur-sm h-28 w-full px-8`}
    >
      <SquareButton
        action=''
        translucid={true}
        color='overlay2'
        textColor='ctp-text'
        size={2}
        content={<ArrowArcLeft />}
      />
      <Link
        to='/tasks/new'
        className={`bg-${flavour}-blue rounded-full shadow-lg w-20 h-20 flex justify-center items-center
        hover:brightness-90 duration-100 focus:ring-2 outline-none cursor-pointer focus:ring-${flavour}-sky`}
      >
        <Plus size={38} color='#fff' weight='bold' />
      </Link>
      <SquareButton
        action=''
        translucid={true}
        color='red'
        textColor='ctp-red'
        size={2}
        content={<Trash />}
      />
    </div>
  );
};
