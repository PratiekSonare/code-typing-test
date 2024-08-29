import React, {useContext} from 'react';
import '../SpeedTypingGame.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';


const Footer = () => {
  const { currentTheme } = useContext(ThemeContext);
  
  const footerList = (
    <ul className="flex flex-col gap-4 lg:flex-row lg:gap-8 text-[18px] text-black">
      <Link to="/">
        <li className='hover:text-purple-200'>Contact Us</li>
      </Link>
    </ul>
  );

    return (
        <footer className="w-full bg-transparent bottom-0 left-0 right-0 text-black z-50 border-t-2" style={{ background: currentTheme.footernavbar, color: currentTheme.textColor }}>
            <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-40">
                <div className="mb-4 md:mb-0">
                    <p className="text-lg font-semibold jost-regular" style={{ color: currentTheme.textColor }}>© 2024 Your Company</p>
                </div>
                <div className='flex items-center jost-regular' style={{ color: currentTheme.textColor }}>{footerList}</div>
            </div>
        </footer>
    );
};

export default Footer;
