import { useContext } from 'react';
import { Header } from '../components/Header';
import { FlavourContext } from '../contexts/flavour-context';

export const NotFound = () => {
  const { flavour } = useContext(FlavourContext);

  return (
    <>
      <Header pageTitle='Not Found' />
      <div className='p-4 py-6'>
        <h1 className={`text-5xl font-bold text-${flavour}-text`}>Whoops...</h1>
        <h2 className={`mt-4 text-2xl font-bold text-${flavour}-subtext1`}>
          You've found a dead end, try going back to the previous page.
        </h2>
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <span
            className={`font-black text-[10rem] opacity-30 text-${flavour}-subtext0`}
          >
            404
          </span>
        </div>
      </div>
    </>
  );
};
