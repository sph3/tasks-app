import { Link } from 'react-router-dom';

type TaskProps = {
  text: string;
  date: Date;
  color?: string;
};

export const Task = ({ text, date, color }: TaskProps) => {
  return (
    <>
      <div className='flex h-16'>
        <div
          className={`h-full w-4 rounded-tl-2xl rounded-bl-2xl ${color ? color : 'bg-ctp-blue'}`}
        ></div>
        <Link
          to='/tasks/id'
          className='rounded-tr-2xl rounded-br-2xl w-full bg-ctp-surface0 shadow-lg h-16 flex justify-between items-center p-4'
        >
          <span className='text-ctp-text text-lg'>{text}</span>
          <span className='text-ctp-subtext0 text-base'>
            {date.toLocaleDateString(undefined, {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              hour12: false,
              minute: '2-digit',
            })}
          </span>
        </Link>
      </div>
    </>
  );
};
