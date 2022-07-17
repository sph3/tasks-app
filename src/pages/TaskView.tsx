import { ArrowUUpLeft, Trash } from 'phosphor-react';
import { useContext } from 'react';
import { Header } from '../components/Header';
import { SquareButton } from '../components/SquareButton';
import { FlavourContext } from '../contexts/flavour-context';

export const TaskView = () => {
  const { flavour } = useContext(FlavourContext);

  const leftButton = (
    <SquareButton
      action='/tasks'
      color='surface0'
      textColor='ctp-text'
      content={<ArrowUUpLeft />}
    />
  );

  const rightButton = (
    <SquareButton
      action=''
      translucid={true}
      color='red'
      textColor='ctp-red'
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
          <h1 className={`text-3xl font-bold text-${flavour}-text`}>
            Task Title Here
          </h1>
          <h2 className={`text-lg text-${flavour}-subtext0`}>
            Created at: 10/07/2022, 23:06
          </h2>
        </div>
        <div>
          <h1 className={`font-bold text-2xl text-${flavour}-text`}>
            Details:
          </h1>
          <div
            className={`mt-1 bg-${flavour}-surface0 rounded-2xl p-3 w-full flex items-center justify-center
            h-auto min-h-[64px] max-h-80 overflow-y-scroll shadow-md`}
          >
            <p className={`first:text-${flavour}-text m-auto`}>
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
