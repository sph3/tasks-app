import { X } from 'phosphor-react';
import { useRef, useState } from 'react';
import { Header } from '../components/Header';
import { SquareButton } from '../components/SquareButton';
import { TagColor } from '../components/TagColor';

export const NewTask = () => {
  const taskTitle = useRef<HTMLInputElement>(null);
  const taskDescription = useRef<HTMLTextAreaElement>(null);
  const [taskTagColor, setTaskTagColor] = useState('');

  const handleClickColor = (color: string) => {
    if (taskTagColor === color) {
      setTaskTagColor('');
      return;
    }
    setTaskTagColor(color);
  };

  const leftButton = (
    <SquareButton
      action='/tasks'
      focusRingColor='focus:ring-ctp-red'
      translucid={true}
      color='bg-ctp-red'
      textColor='text-ctp-red'
      content={<X />}
    />
  );

  const rightButton = (
    <SquareButton
      action=''
      focusRingColor='focus:ring-ctp-text'
      color='bg-ctp-blue'
      textColor='text-white'
      content='Save'
    />
  );

  return (
    <>
      <Header
        pageTitle='New Task'
        leftButton={leftButton}
        rightButton={rightButton}
      />
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
              ref={taskTitle}
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
              ref={taskDescription}
              id='taskDescription'
              placeholder='Bring milk, bread, candy...'
              className='flex items-center bg-ctp-surface0 text-ctp-subtext1 focus:text-ctp-text
                placeholder-ctp-overlay1 resize-none
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
            <div
              id='taskColor'
              className='flex justify-around items-center mt-4'
            >
              <TagColor
                selectedColor={taskTagColor}
                color='bg-ctp-sky'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='bg-ctp-blue'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='bg-ctp-green'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='bg-ctp-yellow'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='bg-ctp-peach'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='bg-ctp-mauve'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='bg-ctp-red'
                handleClickColor={handleClickColor}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
