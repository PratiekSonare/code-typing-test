// src/ThemeToggleButton.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='rounded-full'>
      <button onClick={toggleTheme} className='btn1 flex'>
        <DarkModeIcon style={{width: 24, height: 24}}/>
      </button>
    </div>
    
  );
};

export default ThemeToggleButton;
