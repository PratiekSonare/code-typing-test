import React, { useState } from 'react';
import '../components/SpeedTypingGame.css'; // Make sure to create an App.css file for styles

const App = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
  
    const handleButtonClick = (buttonId) => {
      setSelectedButton(buttonId);
      setIsExpanded(true);
    };
  
    const handleBackClick = () => {
      setSelectedButton(null);
      setIsExpanded(false);
    };
  
    return (
      <div>
        <div className='card' style={{width: 500, height: 'auto'}}>
          <div className='left'>
            <img className='rounded-3xl' src='https://images.unsplash.com/photo-1724271366025-5bbfc5fbdb70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D' alt='' />
          </div>
          <div className='center'>
            <img className='rounded-3xl' src='https://images.unsplash.com/photo-1724271366025-5bbfc5fbdb70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D' alt='' />
          </div>
          <div className='right'>
            <img className='rounded-3xl' src='https://images.unsplash.com/photo-1724271366025-5bbfc5fbdb70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D' alt='' />
          </div>
        </div>
      </div>
    );
  };
  
  export default App;
