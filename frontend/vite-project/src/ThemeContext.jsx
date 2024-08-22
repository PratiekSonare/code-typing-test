import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const lightTheme = {
    background: '#ffffff',
    textColor: '#000000',
    cardColor: '#d0d3d4',
    borderColor: '#000000'
  };

  const darkTheme = {
    background: '#070f4e',
    textColor: '#ffffff',
    inputColor: '#000000',
    cardColor: '#070f4e',
    borderColor: '#ffffff'
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