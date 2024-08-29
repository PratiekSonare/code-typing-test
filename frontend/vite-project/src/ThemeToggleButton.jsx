// src/ThemeToggleButton.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Assuming 'light' theme is the default and you toggle to 'dark'
  const isDarkMode = theme === 'dark';

  return (
    <div className='mr-4'>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleTheme}
        size={30}
      />
    </div>
  );
};

export default ThemeToggleButton;
