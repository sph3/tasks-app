import { Task } from './Task';

export const TaskList = () => {
  return (
    <div className='flex flex-col gap-4 scroll-smooth'>
      <Task date={new Date()} text='Placeholder task' />
      <Task date={new Date()} text='Placeholder task' />
      <Task date={new Date()} text='Placeholder task' />
      <Task date={new Date()} text='Placeholder task' />
      <Task date={new Date()} text='Placeholder task' />
      <Task date={new Date()} text='Placeholder task' />
      <Task date={new Date()} text='Placeholder task' />
      <Task date={new Date()} text='Placeholder task' />
      <Task date={new Date()} text='Placeholder task' />
      <Task date={new Date()} text='Placeholder task' />
      <Task date={new Date()} text='Placeholder task' />
    </div>
  );
};
