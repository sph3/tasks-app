import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';

export const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <Header pageTitle='Not Found' />
      <div className='p-4 py-6'>
        <h1 className='text-5xl font-bold text-ctp-text'>Whoops...</h1>
        <h2 className='mt-4 text-2xl font-bold text-ctp-subtext1'>
          You've found a dead end, try going back to the previous page.
        </h2>
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <span className='font-black text-[10rem] opacity-30 text-ctp-subtext0'>
            404
          </span>
        </div>
      </div>
    </>
  );
};
