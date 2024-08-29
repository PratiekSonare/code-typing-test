// src/Navbar.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../SpeedTypingGame.css';
import { ThemeContext } from '../../ThemeContext';
import ThemeToggleButton from '../../ThemeToggleButton';

const Navbar = () => {
  const { currentTheme } = useContext(ThemeContext);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const navList = (
    <ul className="flex flex-col gap-4 lg:flex-row lg:gap-8 text-[18px] text-black" style={{ color: currentTheme.textColor }}>
      <Link to="/">
        <li className='hover:text-purple-200'>Typing Test</li>
      </Link>
      <Link to="/">
        <li className='hover:text-purple-200'>Contact Us</li>
      </Link>
    </ul>
  );

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isScrollingUp ? 'transform-none' : '-translate-y-full'}`}>
      <nav className='text-black p-4 border-b-2' style={{ background: currentTheme.footernavbar }}>
        <div className='mx-auto flex justify-between items-center'>
          <div className='text-3xl font-semibold jost-regular ml-5' style={{ color: currentTheme.textColor }}>practice_algo</div>
          <div className='flex items-center gap-10 jost-regular'>
            {navList}
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
