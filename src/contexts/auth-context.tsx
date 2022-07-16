import { createContext, ReactNode, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../services/firebase';

type User = {
  id: string;
  name: string;
  picture: string | null;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName) {
          throw new Error('You cannot sign in on this app without a name :/');
        }

        setUser({ id: uid, name: displayName, picture: photoURL });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    const authProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, authProvider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName) {
        throw new Error('You cannot sign in on this app without a name :/');
      }

      setUser({ id: uid, name: displayName, picture: photoURL });
    }
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
