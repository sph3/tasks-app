import { Check } from 'phosphor-react';
import { useContext } from 'react';
import { FlavourContext } from '../contexts/flavour-context';

export type TagColor =
  | 'red'
  | 'green'
  | 'sky'
  | 'peach'
  | 'mauve'
  | 'yellow'
  | 'blue';

type TagColorProps = {
  color: TagColor;
  selectedColor: TagColor;
  handleClickColor: (color: TagColor) => void;
};

export const TagColor = ({
  handleClickColor,
  color,
  selectedColor,
}: TagColorProps) => {
  const { flavour } = useContext(FlavourContext);
  const selected = selectedColor === color;

  return (
    <button
      onClick={() => {
        handleClickColor(color);
      }}
      className={`text-${flavour}-crust flex items-center justify-center ${
        selected ? 'h-9 w-11' : 'h-8 w-10'
      }
        rounded-xl outline-none bg-${flavour}-${color}`}
    >
      {selected ? <Check weight='bold' /> : ''}
    </button>
  );
};
