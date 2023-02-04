import React from 'react';
import avator from '../images/1.jpg';
import {Logout} from '@mui/icons-material';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase';
import {useNavigate} from 'react-router-dom';

const DrawerNav = () => {
  const navigate = useNavigate();
  const signout = () => {
    signOut(auth);
    navigate('/login');
  };
  return (
    <div>
      <div className='drawerNav'>
        <div className='logo'>
          <h1>
            Ray<span>Chat</span>
          </h1>
        </div>
        <div className='drawerProfileContainer'>
          <div className='profileNav'>
            <img src={avator} alt='' />
          </div>
          <button onClick={signout}>
            <Logout />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawerNav;
