import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const lightTheme = {
    background: '#d0d3d4',
    textColor: '#000000',
    cardColor: '#aeafb0',
    borderColor: '#000000',
    footernavbar: '#d0d3d4'
  };

  const darkTheme = {
    background: 'linear-gradient(180deg, rgba(7,15,78,1) 0%, rgba(3,7,35,1) 69%, rgba(0,0,0,1) 100%)',
    textColor: '#ffffff',
    inputColor: '#000000',
    cardColor: '',
    borderColor: '#ffffff',
    footernavbar: '#070f4e'
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? lightTheme.background : darkTheme.background;
  }, [theme]);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;