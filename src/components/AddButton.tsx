import { Plus } from 'phosphor-react';

export const AddButton = () => {
  return (
    <button className='bg-ctp-blue rounded-full shadow-lg w-20 h-20 flex justify-center items-center hover:brightness-90 duration-100 focus:ring-2 outline-none cursor-pointer focus:ring-ctp-sky'>
      <Plus size={40} color='#fff' />
    </button>
  );
};
