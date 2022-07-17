import { ArrowUUpLeft, Trash } from 'phosphor-react';
import { Header } from '../components/Header';
import { SquareButton } from '../components/SquareButton';

export const TaskView = () => {
  const leftButton = (
    <SquareButton
      focusRingColor='focus:ring-ctp-text'
      action='/tasks'
      color='bg-ctp-surface0'
      textColor='text-ctp-text'
      content={<ArrowUUpLeft />}
    />
  );

  const rightButton = (
    <SquareButton
      focusRingColor='focus:ring-ctp-red'
      action=''
      translucid={true}
      color='bg-ctp-red'
      textColor='text-ctp-red'
      content={<Trash weight='bold' />}
    />
  );

  return (
    <>
      <Header
        pageTitle='Task View'
        leftButton={leftButton}
        rightButton={rightButton}
      />
      <div className='p-4 mt-2 flex flex-col gap-4 pb-28'>
        <div>
          <h1 className='text-3xl font-bold text-ctp-text'>Task Title Here</h1>
          <h2 className='text-lg text-ctp-subtext0'>
            Created at: 10/07/2022, 23:06
          </h2>
        </div>
        <div>
          <h1 className='font-bold text-2xl text-ctp-text'>Details:</h1>
          <div
            className='mt-1 bg-ctp-surface0 rounded-2xl p-3 w-full flex items-center justify-center
            h-auto min-h-[64px] max-h-80 overflow-y-scroll shadow-md'
          >
            <p className='text-ctp-text m-auto'>
              Lorem ipsum dolor, sit amet tinctio odio ullam voluptatem laborum
              quisquam velit adipisci temporibus assumenda nesciunt, vitae ad
              iste ratione vel optio dolor nisi placeat eveniet. Nulla, dolor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
