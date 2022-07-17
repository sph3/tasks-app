import { ReactNode, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FlavourContext } from '../contexts/flavour-context';
import { MenuContext } from '../contexts/menu-context';

type MenuItemProps = {
  icon: ReactNode;
  text: string;
  path: string;
};

export const MenuItem = ({ icon, text, path }: MenuItemProps) => {
  const { flavour } = useContext(FlavourContext);
  const { toggleMenu } = useContext(MenuContext);
  const handleClick = () => {
    toggleMenu();
  };

  return (
    <Link
      to={path}
      onClick={handleClick}
      className='flex gap-4 bg-${flavour}-overlay0 rounded-2xl px-4 h-16 items-center'
    >
      <span className={`text-3xl text-${flavour}-text`}>{icon}</span>
      <span className={`text-2xl text-${flavour}-text`}>{text}</span>
    </Link>
  );
};
