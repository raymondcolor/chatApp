import React from 'react';
import photo from '../images/1.jpg'
const Message = () => {
  return (
    <div>
      <div className='messageRecived'>
        <div className='messageText'>
          <p>Hello sabiiti jadkfjahfsdas ajksfkajsf asjdfhakld jhadfgkajhd fajhkfgdakj afjsfadkj asjflaks asjdflas sjahksdfj afdjka adfkaj</p>
        </div>
        <div className='messageImage'>
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Message;
