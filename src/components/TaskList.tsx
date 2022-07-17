import { Task } from './Task';

export const TaskList = () => {
  const tasks = [1];

  return (
    <div className='flex flex-col gap-4 scroll-smooth'>
      {tasks.length ? (
        <>
          <Task
            color='bg-ctp-green'
            title='Tarefa de teste'
            completed={false}
            setDate={new Date('2022-07-22')}
          />
          <Task color='bg-ctp-blue' title='Tarefa de teste' completed={true} />
          <Task
            color='bg-ctp-red'
            title='Tarefa de teste'
            completed={false}
            setDate={new Date()}
          />
          <Task
            color='bg-ctp-yellow'
            title='Tarefa de teste'
            completed={true}
          />
          <Task
            color='bg-ctp-peach'
            title='Tarefa de teste'
            completed={false}
          />
          <Task color='bg-ctp-sky' title='Tarefa de teste' completed={true} />
          <Task
            color='bg-ctp-mauve'
            title='Tarefa de teste'
            completed={false}
            setDate={new Date('2022-07-19 17:00')}
          />
          <Task
            color='bg-ctp-sapphire'
            title='Tarefa de teste'
            completed={true}
          />
          <Task
            color='bg-ctp-green'
            title='Tarefa de teste'
            completed={false}
            setDate={new Date()}
          />
          <Task color='bg-ctp-blue' title='Tarefa de teste' completed={true} />
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
