import React from 'react';

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
        <button className="btn flex justify-center items-center" onClick={resetGame}>Try Again</button>
    </div>
  );
};

export default TypingArea;
