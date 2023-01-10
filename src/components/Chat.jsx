import React from 'react';
import Input from './Input';
import Messages from './Messages';

const Chat = () => {
  return (
    <div>
      <div className='chatSection'>
        <div className='ChatNav'>
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
