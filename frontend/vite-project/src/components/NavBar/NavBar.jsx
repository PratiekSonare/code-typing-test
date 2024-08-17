// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../SpeedTypingGame.css';

const navList = (
    <ul className="flex flex-col gap-4 lg:flex-row lg:gap-8 text-[18px] text-black">
      <Link to="/">
        <li className='hover:text-purple-200'>Contact Us</li>
      </Link>
    </ul>
  );

const Navbar = () => {
  return (
    <header className='w-full fixed top-0 left-0 right-0 z-50'>
      <nav className='bg-transparent text-black p-4'>
        <div className='mx-auto flex justify-between items-center'>
          <div className='text-lg font-semibold'>Your Logo</div>
          <div className='flex items-center'>
            {navList}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
