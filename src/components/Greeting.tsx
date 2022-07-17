import { useContext } from 'react';
import { FlavourContext } from '../contexts/flavour-context';
import { useAuth } from '../hooks/use-auth';

export const Greeting = () => {
  const { user } = useAuth();
  const { flavour } = useContext(FlavourContext);

  return (
    <div>
      <h1 className='font-bold text-4xl text-${flavour}-text'>
        Hello, {user?.name.split(' ')[0]}
      </h1>
    </div>
  );
};
