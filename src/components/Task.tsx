type TaskProps = {
  text: string;
  date: Date;
};

export const Task = ({ text, date }: TaskProps) => {
  return (
    <div className='rounded-2xl w-full bg-ctp-surface0 shadow-lg h-14 flex justify-between items-center p-4'>
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
    </div>
  );
};
