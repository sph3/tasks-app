import { useAuth } from '../hooks/use-auth';

export const Greeting = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className='font-bold text-4xl text-ctp-text'>
        Hello, {user?.name.split(' ')[0]}!
      </h1>
    </div>
  );
};
