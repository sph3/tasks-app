import { FileText, GoogleLogo, Plus } from 'phosphor-react';

export const Home = () => {
  return (
    <div className='p-4 pt-8'>
      <div className='flex gap-4'>
        <span className='text-8xl text-ctp-text'>
          <FileText />
        </span>

        <h1 className='font-bold text-5xl text-ctp-text'>
          Welcome to Tasks App
        </h1>
      </div>
      <div className='flex flex-col gap-6 mt-10 justify-center items-center'>
        <p className='text-ctp-subtext1 text-xl text-center'>
          Tasks App helps you stay organized with your day-to-day tasks with a
          simple interface and multiple useful features
        </p>
        <span className='text-ctp-subtext1 text-2xl text-center'>
          Sign in below and start organizing your tasks!
        </span>
        <button className='rounded-2xl flex items-center text-center justify-center gap-2 bg-ctp-red text-lg font-bold text-white w-56 h-14 outline-none focus:ring-2 focus:ring-ctp-blue hover:brightness-90 duration-100'>
          <GoogleLogo weight='bold' />
          Sign in with Google
        </button>
      </div>
      <div className='py-10 pl-4 flex'>
        <div className='h-48 w-28 bg-ctp-surface1 rounded-2xl shrink-0'></div>
        <div className='flex flex-col mt-4 -translate-x-20 gap-3'>
          <div className='bg-ctp-surface0 rounded-2xl h-10 w-32'></div>
          <div className='bg-ctp-surface0 rounded-2xl h-10 w-32'></div>
          <div className='bg-ctp-surface0 rounded-2xl h-10 w-32'></div>
          <div className='rounded-full bg-ctp-blue h-6 w-6 translate-x-3 flex justify-center items-center text-center text-white text-xs'>
            <Plus />
          </div>
        </div>
        <div className='mt-3 flex flex-col gap-2 -translate-x-10'>
          <span className='text-ctp-subtext0'>
            Easily view and edit your tasks!
          </span>
          <span className='text-ctp-subtext0'>
            Add reminders, images
          </span>
          <span className='text-ctp-subtext0'>
            and mark tasks as done!
          </span>
        </div>
      </div>
    </div>
  );
};
