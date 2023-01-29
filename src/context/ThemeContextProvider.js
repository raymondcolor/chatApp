import React, {useState} from 'react';
import {createContext} from 'react';

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [themeIcon, setThemeIcon] = useState(true);

  const toggleTheme = () => {
    const newThem = theme === 'light' ? 'dark' : 'light';
    setTheme(newThem);
    setThemeIcon(!themeIcon);
    localStorage.setItem('theme', newThem);
  };

  return (
    <ThemeContext.Provider value={{theme, themeIcon, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
