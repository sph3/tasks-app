import { ReactNode, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../contexts/menu-context';

type MenuItemProps = {
  icon: ReactNode;
  text: string;
  path: string;
};

export const MenuItem = ({ icon, text, path }: MenuItemProps) => {
  const { toggleMenu } = useContext(MenuContext);
  const handleClick = () => {
    toggleMenu();
  };

  return (
    <Link
      to={path}
      onClick={handleClick}
      className='flex gap-4 bg-ctp-overlay0 rounded-2xl px-4 h-16 items-center'
    >
      <span className='text-3xl text-ctp-text'>{icon}</span>
      <span className='text-2xl text-ctp-text'>{text}</span>
    </Link>
  );
};
