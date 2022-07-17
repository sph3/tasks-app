import { List } from 'phosphor-react';
import { useContext } from 'react';
import { Footer } from '../components/Footer';
import { Greeting } from '../components/Greeting';
import { Header } from '../components/Header';
import { SquareButton } from '../components/SquareButton';
import { TaskList } from '../components/TaskList';
import { MenuContext } from '../contexts/menu-context';

export const Main = () => {
  const { toggleMenu } = useContext(MenuContext);

  const leftButton = (
    <SquareButton
      action={toggleMenu}
      focusRingColor='focus:ring-ctp-text'
      color='bg-ctp-surface0'
      textColor='text-ctp-text'
      content={<List weight='bold' />}
    />
  );

  return (
    <>
      <Header leftButton={leftButton} pageTitle='Your Tasks' />
      <div className='lg:px-24 p-4 mt-2 flex flex-col gap-4 pb-28'>
        <Greeting />
        <TaskList />
        <Footer />
      </div>
    </>
  );
};
