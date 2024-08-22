import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';
import ThemeToggleButton from '../ThemeToggleButton';

const Banner = () => {
    const [visible, setVisible] = useState(false);
    const { currentTheme } = useContext(ThemeContext);

    const handleScroll = () => {
        const bannerTop = document.querySelector('.banner').getBoundingClientRect().top;
        const scrollUp = window.scrollY < window.prevScrollY;
        if (scrollUp && bannerTop >= 0 && bannerTop < window.innerHeight) {
            setVisible(true);
        }
        window.prevScrollY = window.scrollY;
    };

    useEffect(() => {
        // Trigger typewriter effect on initial load
        setVisible(true);

        // Store the initial scroll position
        window.prevScrollY = window.scrollY;

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="h-screen banner">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="new-amsterdam-regular text-9xl" style={{ color: currentTheme.textColor }}>
                    Code Better. Type Faster.
                </div>
                <div className={`press-start-2p-regular text-2xl typewriter ${visible ? 'typewriter-visible' : ''}`} style={{ color: currentTheme.textColor }}>
                    <h1>Learn data structure algorithms and improve your typing speed!</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
