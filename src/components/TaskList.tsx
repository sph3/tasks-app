import { Task } from './Task';

export const TaskList = () => {
  const tasks = [];

  return (
    <div className='flex flex-col gap-4 scroll-smooth'>
      {tasks.length ? (
        <>
          <Task color='bg-ctp-green' text='Tarefa de teste' date={new Date()} />
          <Task color='bg-ctp-blue' text='Tarefa de teste' date={new Date()} />
          <Task color='bg-ctp-red' text='Tarefa de teste' date={new Date()} />
          <Task
            color='bg-ctp-yellow'
            text='Tarefa de teste'
            date={new Date()}
          />
          <Task color='bg-ctp-peach' text='Tarefa de teste' date={new Date()} />
          <Task color='bg-ctp-sky' text='Tarefa de teste' date={new Date()} />
          <Task color='bg-ctp-mauve' text='Tarefa de teste' date={new Date()} />
          <Task
            color='bg-ctp-sapphire'
            text='Tarefa de teste'
            date={new Date()}
          />
          <Task color='bg-ctp-green' text='Tarefa de teste' date={new Date()} />
          <Task color='bg-ctp-blue' text='Tarefa de teste' date={new Date()} />
        </>
      ) : (
        <>
          <span className='text-ctp-subtext0 text-2xl'>
            Seems a bit empty around here...
            <br />
            Maybe add some tasks?
          </span>
          <div className='mt-2 rounded-2xl w-full bg-ctp-surface0 opacity-80 shadow-lg h-16'></div>
          <div className='mt-2 rounded-2xl w-full bg-ctp-surface0 opacity-60 shadow-lg h-16'></div>
          <div className='mt-2 rounded-2xl w-full bg-ctp-surface0 opacity-40 shadow-lg h-16'></div>
          <div className='mt-2 rounded-2xl w-full bg-ctp-surface0 opacity-20 shadow-lg h-16'></div>
        </>
      )}
    </div>
  );
};
