import { Check } from 'phosphor-react';
import { Header } from './Header';

export const Create = () => {
  return (
    <>
      <Header pageTitle='New Task' />
      <div className='p-4 mt-2'>
        <div className='flex flex-col gap-4'>
          <div>
            <label
              htmlFor='taskTitle'
              className='text-ctp-text font-bold text-2xl'
            >
              Title:
            </label>
            <input
              type='text'
              id='taskTitle'
              className='bg-ctp-surface0 text-ctp-subtext1 focus:text-ctp-text placeholder-ctp-overlay1
                rounded-2xl w-full h-14 mt-1 p-3 text-xl'
              placeholder='Go to the grocery store...'
            />
          </div>

          <div>
            <label
              className='text-ctp-text font-bold text-2xl'
              htmlFor='taskDescription'
            >
              Description:
            </label>
            <textarea
              id='taskDescription'
              placeholder='Bring milk, bread, candy...'
              className='flex items-center bg-ctp-surface0 text-ctp-subtext1 focus:text-ctp-text
                placeholder-ctp-overlay1
                rounded-2xl w-full h-28 mt-1 p-3 text-xl'
            />
          </div>

          <div>
            <label
              htmlFor='taskColor'
              className='text-ctp-text font-bold text-2xl'
            >
              Tag color:
            </label>
            <div id='taskColor' className='flex justify-around mt-4'>
              <button className='text-white flex items-center justify-center h-8 w-10 bg-ctp-sky rounded-xl outline-none'></button>
              <button className='text-white flex items-center justify-center h-8 w-10 bg-ctp-blue rounded-xl outline-none'></button>
              <button className='border-2 border-ctp-crust text-white flex items-center justify-center h-8 w-10 bg-ctp-green rounded-xl outline-none'>
                <Check weight='bold' />
              </button>
              <button className='text-white flex items-center justify-center h-8 w-10 bg-ctp-yellow rounded-xl outline-none'></button>
              <button className='text-white flex items-center justify-center h-8 w-10 bg-ctp-peach rounded-xl outline-none'></button>
              <button className='text-white flex items-center justify-center h-8 w-10 bg-ctp-mauve rounded-xl outline-none'></button>
              <button className='text-white flex items-center justify-center h-8 w-10 bg-ctp-red rounded-xl outline-none'></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
