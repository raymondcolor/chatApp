import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Input = () => {
  return (
    <div>
      <div className='typingInput'>
        <input type='text' placeholder='Type here' />
        <div className='send'>
          <input type='file' id='file' style={{display: 'none'}} />
          <label htmlFor='file'>
            <AttachFileIcon />
          </label>
          <button>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
