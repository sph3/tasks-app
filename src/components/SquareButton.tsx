import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type SquareButtonProps = {
  color: string;
  textColor: string;
  content: string | ReactNode;
  translucid?: boolean;
  size?: number;
  action: (() => void) | string;
};

export const SquareButton = ({
  color,
  textColor,
  content,
  action,
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

  const allClasses = `flex text-center items-center justify-center outline-none
    duration-100 focus:ring-2 ${sizeClasses} ${backgroundClasses} text-${textColor} bg-ctp-${color} ${
    typeof content === 'string' ? 'px-3' : ''
  }`;

  const element =
    typeof action === 'string' ? (
      <Link to={action} className={allClasses}>
        <span className={textSize}>{content}</span>
      </Link>
    ) : (
      <button onClick={action} className={allClasses}>
        <span className={textSize}>{content}</span>
      </button>
    );

  return element;
};
