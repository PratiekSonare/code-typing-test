import React, {useContext} from 'react'
import Button from '@mui/material/Button';
import { ThemeContext } from '../ThemeContext';

const Language = ({ scrollToNextComponent }) => {
    const { currentTheme } = useContext(ThemeContext);
    const list = [
        'C++',
        'Python',
        'JavaScript',
    ];
    

  return (
    <div
    className="flex flex-col items-center justify-center min-h-screen"
    style={{ background: currentTheme.footernavbar, color: currentTheme.textColor }}
    >
    <div className="press-start-2p-regular text-sm flex flex-col items-center justify-center">
        <h1 className="text-4xl jost-regular text-center mb-6">Choose language</h1>
        <ul className="flex flex-row justify-center gap-10">
        {list.map((element, index) => (
            <li key={index}>
            <button
                onClick={scrollToNextComponent}
                className="algobutton"
                style={{ scrollSnapAlign: 'start', borderColor: currentTheme.borderColor }}
            >
                {element}
            </button>
            </li>
        ))}
        </ul>
    </div>
    </div>

  )
}

export default Language