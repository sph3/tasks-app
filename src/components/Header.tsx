import { ReactNode, useContext } from 'react';
import { MenuContext } from '../contexts/menu-context';
import { Menu } from './Menu';
import { SquareButton } from './SquareButton';

type HeaderProps = {
  pageTitle:
    | 'Your Tasks'
    | 'Task View'
    | 'New Task'
    | 'Choose Your Theme'
    | 'Menu'
    | 'Not Found';
  leftButton?: ReactNode | null;
  rightButton?: ReactNode | null;
};

export const Header = ({ pageTitle, leftButton, rightButton }: HeaderProps) => {
  const { status: menuStatus, toggleMenu } = useContext(MenuContext);

  const handleClick = () => {
    if (pageTitle !== 'Task View') {
      toggleMenu();
    }
  };

  return (
    <div>
      <div className='flex flex-row justify-between items-center text-center h-16 bg-ctp-mantle flex-wrap px-2'>
        <div className=''>{leftButton}</div>

        <div className=''>
          <span className='font-bold text-xl text-ctp-text'>{pageTitle}</span>
        </div>

        <div>
          <SquareButton color='blue' textColor='base' content='Save' />
        </div>
      </div>
      {menuStatus ? <Menu /> : ''}
    </div>
  );
};
