import { ReactNode } from 'react';

type SquareButtonProps = React.ComponentProps<'button'> & {
  color: string;
  textColor: string;
  content: string | ReactNode;
};

export const SquareButton = ({
  color,
  textColor,
  content,
  onClick,
}: SquareButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-ctp-${textColor} bg-ctp-${color} min-w-[2.5rem] ${
        typeof content === 'string' ? 'px-3' : ''
      } h-10 rounded-lg flex text-center
        opacity-90
        items-center justify-center outline-none hover:opacity-100 duration-100
        focus:ring-ctp-text focus:ring-2`}
    >
      <span
        className={`${typeof content === 'string' ? 'text-lg' : 'text-xl'}`}
      >
        {content}
      </span>
    </button>
  );
};
