import { Header } from '../components/Header';

export const TaskView = () => {
  return (
    <>
      <Header pageTitle='Task View' />
      <div className='p-3 mt-2 flex flex-col gap-4 pb-28'>
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
            <p className='text-base m-auto'>
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
