import React from 'react';
import avator from '../images/1.jpg';

const DrawerNav = () => {
  return (
    <div>
      <div className='drawerNav'>
        <div className='logo'>
          <h1>
            Ray<span>Chat</span>
          </h1>
        </div>
        <div className='profileNav'>
          <img src={avator} alt='' />
        </div>
      </div>
    </div>
  );
};

export default DrawerNav;
