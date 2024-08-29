import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';
import ThemeToggleButton from '../ThemeToggleButton';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Banner = ({ scrollToNextComponent }) => {
    const [visible, setVisible] = useState(false);
    const { currentTheme } = useContext(ThemeContext);
  
    const handleScroll = () => {
      const bannerBottom = document.querySelector('.banner').getBoundingClientRect().bottom;
      if (bannerBottom <= window.innerHeight) {
        scrollToNextComponent();
      }
    };

    useEffect(() => {
        // Trigger typewriter effect on initial load
        setVisible(true);
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollToNextComponent]);

    return (
        <div className="h-screen banner" style={{ background: currentTheme.footernavbar }}>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="new-amsterdam-regular text-9xl mt-20" style={{ color: currentTheme.textColor }}>
                    Code Better. Type Faster.
                </div>
                <div className={`mb-20 press-start-2p-regular text-xl typewriter ${visible ? 'typewriter-visible' : ''}`} style={{ color: currentTheme.textColor }}>
                    <h1>Learn data structure algorithms and improve your typing speed!</h1>
                </div>
                <div className='flex-end'>
                    <DoubleArrowIcon style={{ width: 80, height: 80, color: 'white', opacity: 0.2, rotate: '90deg' }}/>
                </div>
            </div>
        </div>
    );
};

export default Banner;
