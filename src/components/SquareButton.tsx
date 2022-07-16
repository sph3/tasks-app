import { ReactNode } from 'react';

type SquareButtonProps = React.ComponentProps<'button'> & {
  color: string;
  textColor: string;
  content: string | ReactNode;
  translucid?: boolean;
  size?: number;
};

export const SquareButton = ({
  color,
  textColor,
  content,
  onClick,
  translucid,
  size,
}: SquareButtonProps) => {
  const backgroundClasses = translucid
    ? 'bg-opacity-20 hover:bg-opacity-30 focus:ring-ctp-' + color
    : 'hover:brightness-90 focus:ring-ctp-text';

  let sizeClasses;
  let textSize;

  if (!size || size === 1) {
    sizeClasses = 'h-10 min-w-[2.5rem] rounded-lg';
    textSize = typeof content === 'string' ? 'text-lg' : 'text-xl';
  } else if (size === 2) {
    sizeClasses = 'h-12 min-w-[3rem] rounded-2xl';
    textSize = typeof content === 'string' ? 'text-xl' : 'text-3xl';
  }

  return (
    <button
      onClick={onClick}
      className={`text-${textColor} bg-ctp-${color} ${
        typeof content === 'string' ? 'px-3' : ''
      } ${backgroundClasses} ${sizeClasses}
        flex text-center
        items-center justify-center outline-none duration-100
         focus:ring-2`}
    >
      <span className={textSize}>{content}</span>
    </button>
  );
};
