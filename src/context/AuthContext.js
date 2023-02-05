import React, {useState, createContext, useEffect} from 'react';
import {auth} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
    });
    console.log(currentUser);
    return () => {
      unsub();
    };
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  );
};
