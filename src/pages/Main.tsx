import { List } from 'phosphor-react';
import { Footer } from '../components/Footer';
import { Greeting } from '../components/Greeting';
import { Header } from '../components/Header';
import { SquareButton } from '../components/SquareButton';
import { TaskList } from '../components/TaskList';

export const Main = () => {
  const leftButton = (
    <SquareButton
      color='surface0'
      textColor='ctp-text'
      content={<List weight='bold' />}
    />
  );

  // TODO: Finish converting other buttons

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
