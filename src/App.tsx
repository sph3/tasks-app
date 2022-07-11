import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const App = () => {
  let [flavor, setFlavor] = useState('ctp-latte');

  return (
    <div className={flavor}>
      <div className='bg-ctp-base min-h-screen'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};
