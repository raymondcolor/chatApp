import React, {useContext} from 'react';
import Input from './Input';
import Messages from './Messages';
import avator from '../images/1.jpg';
import ThemeContextProvider, {
  ThemeContext,
} from '../context/ThemeContextProvider';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Chat = () => {
  const {themeIcon, toggleTheme} = useContext(ThemeContext);
  return (
    <ThemeContextProvider>
      <div>
        <div className='chatSection'>
          <div className='ChatNav'>
            <div className='navContainer'>
              <div className='chatAvator'>
                <img src={avator} alt='' />
              </div>
              <span>Sabiiti</span>
            </div>

            <div className='navIcons'>
              <button onClick={toggleTheme}>
                {themeIcon ? <LightModeIcon /> : <DarkModeIcon />}
              </button>
            </div>
          </div>
          <div className='ChatMessages'>
            <Messages />
          </div>
          <div className='ChatInput'>
            <Input />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default Chat;
