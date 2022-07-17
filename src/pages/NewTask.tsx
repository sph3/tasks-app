import { X } from 'phosphor-react';
import { useContext, useRef, useState } from 'react';
import { Header } from '../components/Header';
import { SquareButton } from '../components/SquareButton';
import { TagColor } from '../components/TagColor';
import { FlavourContext } from '../contexts/flavour-context';

export const NewTask = () => {
  const taskTitle = useRef<HTMLInputElement>(null);
  const taskDescription = useRef<HTMLTextAreaElement>(null);
  const [taskTagColor, setTaskTagColor] = useState<TagColor>('yellow');

  const { flavour } = useContext(FlavourContext);

  const handleClickColor = (color: TagColor) => {
    setTaskTagColor(color);
  };

  const leftButton = (
    <SquareButton
      action='/tasks'
      translucid={true}
      color='red'
      textColor='ctp-red'
      content={<X />}
    />
  );

  const rightButton = (
    <SquareButton action='' color='blue' textColor='white' content='Save' />
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
              className={`text-${flavour}-text font-bold text-2xl`}
            >
              Title:
            </label>
            <input
              ref={taskTitle}
              type='text'
              id='taskTitle'
              className={`bg-${flavour}-surface0 text-${flavour}-subtext1 focus:text-${flavour}-text placeholder-${flavour}-overlay1
                rounded-2xl w-full h-14 mt-1 p-3 text-xl`}
              placeholder='Go to the grocery store...'
            />
          </div>

          <div>
            <label
              className={`text-${flavour}-text font-bold text-2xl`}
              htmlFor='taskDescription'
            >
              Description:
            </label>
            <textarea
              ref={taskDescription}
              id='taskDescription'
              placeholder='Bring milk, bread, candy...'
              className={`flex items-center bg-${flavour}-surface0 text-${flavour}-subtext1 focus:text-${flavour}-text
                placeholder-${flavour}-overlay1 resize-none
                rounded-2xl w-full h-28 mt-1 p-3 text-xl`}
            />
          </div>

          <div>
            <label
              htmlFor='taskColor'
              className={`text-${flavour}-text font-bold text-2xl`}
            >
              Tag color:
            </label>
            <div
              id='taskColor'
              className='flex justify-around items-center mt-4'
            >
              <TagColor
                selectedColor={taskTagColor}
                color='sky'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='blue'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='green'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='yellow'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='peach'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='mauve'
                handleClickColor={handleClickColor}
              />
              <TagColor
                selectedColor={taskTagColor}
                color='red'
                handleClickColor={handleClickColor}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
