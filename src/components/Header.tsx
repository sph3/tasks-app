import { ReactNode, useContext } from 'react';
import { FlavourContext } from '../contexts/flavour-context';
import { MenuContext } from '../contexts/menu-context';
import { Menu } from './Menu';

type HeaderProps = {
  pageTitle: string;
  leftButton?: ReactNode | null;
  rightButton?: ReactNode | null;
};

export const Header = ({ pageTitle, leftButton, rightButton }: HeaderProps) => {
  const { flavour } = useContext(FlavourContext);
  const { status: menuStatus } = useContext(MenuContext);

  return (
    <div>
      <div
        className={`flex flex-row justify-between items-center text-center h-16 bg-${flavour}-mantle flex-wrap px-2`}
      >
        <div>{leftButton}</div>

        <div>
          <span className={`font-bold text-xl text-${flavour}-text`}>
            {pageTitle}
          </span>
        </div>

        <div>{rightButton}</div>
      </div>
      {menuStatus ? <Menu /> : ''}
    </div>
  );
};
