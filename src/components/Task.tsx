import { formatDistance } from 'date-fns';
import { ArchiveBox, Timer } from 'phosphor-react';
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
  let iconColor;

  if (completed) {
    taskIcon = (
      <button
        className='-mr-2 bg-ctp-overlay0 bg-opacity-60 rounded-2xl h-10 w-10
        flex items-center justify-center focus:ring-2 focus:ring-ctp-text outline-none'
      >
        <ArchiveBox weight='bold' />
      </button>
    );
    iconColor = 'text-ctp-text';
  } else if (setDate) {
    taskIcon = <Timer weight='bold' />;
    if (timeToTask === 'expired') {
      iconColor = 'text-ctp-red';
    } else {
      iconColor = 'text-ctp-yellow';
    }
  }

  return (
    <>
      <div className='flex h-16'>
        <div
          className={`h-full w-4 rounded-tl-2xl rounded-bl-2xl ${color}`}
        ></div>
        <Link
          to='/tasks/id'
          className={`rounded-tr-2xl rounded-br-2xl w-full ${
            completed ? 'bg-ctp-green bg-opacity-25' : 'bg-ctp-surface0'
          } shadow-lg h-16 flex
            justify-between items-center p-4`}
        >
          <span className='text-ctp-text text-lg'>{title}</span>
          <div className='flex gap-2 items-center justify-end'>
            {setDate ? (
              <span className='text-lg text-ctp-subtext0'>({timeToTask})</span>
            ) : (
              ''
            )}
            <span className={`text-2xl ${iconColor}`}>{taskIcon}</span>
          </div>
        </Link>
      </div>
    </>
  );
};
