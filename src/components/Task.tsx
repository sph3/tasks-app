import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FlavourContext } from '../contexts/flavour-context';

type TaskProps = {
  text: string;
  date: Date;
};

export const Task = ({ text, date }: TaskProps) => {
  const { flavour } = useContext(FlavourContext);
  return (
    <Link
      to='/tasks/id'
      className={`rounded-2xl w-full bg-${flavour}-surface0 shadow-lg h-16 flex justify-between items-center p-4`}
    >
      <span className={`text-${flavour}-text text-lg`}>{text}</span>
      <span className={`text-${flavour}-subtext0 text-base`}>
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
  );
};
