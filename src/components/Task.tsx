type TaskProps = {
  text: string;
};

export const Task = ({ text }: TaskProps) => {
  return (
    <div className='rounded-2xl w-full bg-ctp-surface0 shadow-lg h-14 text-lg flex items-center p-4'>
      <span>{text}</span>
    </div>
  );
};
