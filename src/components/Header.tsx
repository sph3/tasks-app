import { ArrowUUpLeft, List, Trash, X } from 'phosphor-react';
import { useContext } from 'react';
import { MenuContext } from '../contexts/menu-context';
import { Menu } from './Menu';

type HeaderProps = {
  pageTitle:
    | 'Your Tasks'
    | 'Task View'
    | 'New Task'
    | 'Choose Your Theme'
    | 'Menu'
    | 'Not Found';
};

export const Header = ({ pageTitle }: HeaderProps) => {
  const { status: menuStatus, toggleMenu } = useContext(MenuContext);

  const handleClick = () => {
    if (pageTitle !== 'Task View') {
      toggleMenu();
    }
  };

  let buttonIcon;

  if (pageTitle === 'Task View') {
    buttonIcon = <ArrowUUpLeft weight='bold' />;
  } else if (menuStatus) {
    pageTitle = 'Menu';
    buttonIcon = <X weight='bold' />;
  } else {
    buttonIcon = <List weight='bold' />;
  }

  return (
    <div>
      <div className='flex flex-row justify-between items-center text-center h-16 bg-ctp-mantle flex-wrap px-2'>
        <div className=''>
          <button
            onClick={handleClick}
            className='text-xl text-ctp-text bg-ctp-surface0 w-10 h-10 rounded-lg flex text-center
            items-center justify-center outline-none hover:brightness-90 duration-100
            focus:ring-ctp-overlay2 focus:ring-2'
          >
            {buttonIcon}
          </button>
        </div>

        <div className=''>
          <span className='font-bold text-xl text-ctp-text'>{pageTitle}</span>
        </div>

        <div>
          {pageTitle === 'Task View' ? (
            <button
              className='text-xl text-ctp-red bg-ctp-red bg-opacity-10 w-10 h-10 rounded-lg flex text-center
              items-center justify-center outline-none hover:bg-opacity-30 duration-100 focus:ring-ctp-red
              focus:ring-2'
            >
              <Trash weight='bold' />
            </button>
          ) : (
            <span className='text-xl mr-12'></span>
          )}
        </div>
      </div>
      {menuStatus ? <Menu /> : ''}
    </div>
  );
};
