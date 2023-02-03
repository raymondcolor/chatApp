import React from 'react';
import avator from '../images/1.jpg';
import {Logout} from '@mui/icons-material';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase';

const DrawerNav = () => {
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
          <button onClick={signOut(auth)}>
            <Logout />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawerNav;
