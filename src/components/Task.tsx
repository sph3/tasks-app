import { formatDistance } from 'date-fns';
import { CheckCircle, Timer, X, XCircle } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { ITask } from '../@types';

type TaskProps = Omit<ITask, 'createAt' | 'description'>;

export const Task = ({ title, completed, color, setDate }: TaskProps) => {
  let timeToTask = '';

  if (setDate) {
    timeToTask = formatDistance(setDate, new Date(), {
      addSuffix: true,
    });
    if (timeToTask.includes('ago')) timeToTask = 'expired';
  }

  let taskIcon;

  if (completed) {
    taskIcon = <CheckCircle weight='bold' />;
  } else if (setDate) {
    taskIcon = <Timer weight='bold' />;
  } else {
    taskIcon = <XCircle weight='bold' />;
  }

  return (
    <>
      <div className='flex h-16'>
        <div
          className={`h-full w-4 rounded-tl-2xl rounded-bl-2xl ${color}`}
        ></div>
        <Link
          to='/tasks/id'
          className='rounded-tr-2xl rounded-br-2xl w-full bg-ctp-surface0 shadow-lg h-16 flex justify-between items-center p-4'
        >
          <span className='text-ctp-text text-lg'>{title}</span>
          <div className='flex gap-2 items-center justify-end'>
            {setDate ? (
              <span className='text-lg text-ctp-subtext0'>({timeToTask})</span>
            ) : (
              ''
            )}
            <span
              className={`text-xl ${
                completed ? 'text-ctp-green' : 'text-ctp-red'
              }`}
            >
              {taskIcon}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};
