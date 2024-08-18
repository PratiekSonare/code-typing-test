import React from 'react';
import ThemeToggleButton from '../ThemeToggleButton';

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
  return (
    <div>
      <div className="section section1">
        <div id="paragraph">
          {typingText}
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <button className="btn flex justify-center items-center" onClick={resetGame}>Try Again</button>
        <ThemeToggleButton />
      </div>
        
    </div>
  );
};

export default TypingArea;
