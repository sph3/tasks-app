import { Footer } from './Footer';
import { Greeting } from './Greeting';
import { TaskList } from './TaskList';

export const Main = () => {
  return (
    <div className='p-2 mt-2 flex flex-col gap-4 pb-28'>
      <Greeting />
      <TaskList />
    </div>
  );
};
