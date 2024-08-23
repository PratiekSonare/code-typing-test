import React, {useContext} from 'react';
import ThemeToggleButton from '../ThemeToggleButton';
import { ThemeContext } from '../ThemeContext';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const TypingArea = ({
  typingText,
  inpFieldValue,
  timeLeft,
  mistakes,
  WPM,
  CPM,
  initTyping,
  handleKeyDown,
  resetGame
}) => {
    const { currentTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className="altsection altsection1" style={{ background: currentTheme.cardColor }}>
        <div id="paragraph" style={{ color: currentTheme.textColor }}>
          {typingText}
        </div>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <button className="btn flex justify-center items-center press-start-2p-regular text-sm" onClick={resetGame}>Try Again</button>
      </div>
    </div>
  );
};

export default TypingArea;
