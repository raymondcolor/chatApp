import React from 'react';
import avator from '../images/1.jpg';

const Chats = () => {
  return (
    <div>
      <div className='chat'>
        <div className='chatAvator'>
          <img src={avator} alt='' />
        </div>
        <div className='chatDetails'>
          <h3>Raymond</h3>
          <p>Hello man jhdfkajsdfkja ajkhkjsd saj fjgfjgf fg dkfajs</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
