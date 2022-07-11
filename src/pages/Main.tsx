import { Greeting } from '../components/Greeting';
import { Header } from '../components/Header';
import { TaskList } from '../components/TaskList';

export const Main = () => {
  return (
    <>
      <Header pageTitle='Your Tasks' />
      <div className='p-2 mt-2 flex flex-col gap-4 pb-28'>
        <Greeting />
        <TaskList />
      </div>
    </>
  );
};