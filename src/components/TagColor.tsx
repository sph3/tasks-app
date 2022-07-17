import { Check } from 'phosphor-react';

type TagColorProps = {
  color: string;
  selectedColor: string;
  handleClickColor: (color: string) => void;
};

export const TagColor = ({
  handleClickColor,
  color,
  selectedColor,
}: TagColorProps) => {
  const selected = selectedColor === color;

  return (
    <button
      onClick={() => {
        handleClickColor(color);
      }}
      className={`text-ctp-crust flex items-center justify-center ${
        selected ? 'h-9 w-11' : 'h-8 w-10'
      }
        rounded-xl outline-none ${color}`}
    >
      {selected ? <Check weight='bold' /> : ''}
    </button>
  );
};
