import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from './context/AuthContext';

export const ProtectedRoutes = () => {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);

  if (currentUser) {
    return <Navigate to='/' />;
  } else {
    return <Navigate to='/login' />;
  }
};
