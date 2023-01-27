import React, {useState} from 'react';
import {createContext} from 'react';


export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState('light');
  const [themeIcon, setThemeIcon] = useState(true);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    setThemeIcon(!themeIcon);
  };

  // const value = {
  //   theme,
  //   themeIcon,
  //   toggleTheme,
  // };

  return (
    <ThemeContext.Provider value={{theme, themeIcon, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
