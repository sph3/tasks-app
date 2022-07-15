import { ReactNode } from 'react';

type MenuItemProps = {
  icon: ReactNode;
  text: string;
  path: string;
};

export const MenuItem = ({ icon, text, path }: MenuItemProps) => {
  return (
    <div className='flex gap-4 bg-ctp-overlay0 rounded-2xl px-4 h-16 items-center'>
      <span className='text-3xl text-ctp-text'>{icon}</span>
      <span className='text-2xl text-ctp-text'>{text}</span>
    </div>
  );
};
