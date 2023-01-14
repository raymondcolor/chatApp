import React from 'react';
import Input from './Input';
import Messages from './Messages';
import avator from '../images/1.jpg';

const Chat = () => {
  return (
    <div>
      <div className='chatSection'>
        <div className='ChatNav'>
        <div className='chatAvator'>
          <img src={avator} alt='' />
        </div>
          <span>Sabiiti</span>
        </div>
        <div className='ChatMessages'>
          <Messages />
        </div>
        <div className='ChatInput'>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Chat;
