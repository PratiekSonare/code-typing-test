import React, {useContext} from 'react'
import Button from '@mui/material/Button';
import { ThemeContext } from '../../ThemeContext';

const AltAlgoList = ({ onAlgoClick }) => {
    const { currentTheme } = useContext(ThemeContext);
    const list = [
        'Language Syntax',            // Understanding the basic grammar and rules of the language
        'Data Types',                 // Knowing the different types of data (integers, strings, etc.)
        'Variables and Constants',    // Learning how to store and manage data
        'Operators',                  // Using arithmetic, comparison, logical, and assignment operators
        'Control Structures',         // Implementing if-else, loops (for, while), and switch-case statements
        'Functions and Methods',      // Creating reusable code blocks with functions and understanding methods
        'Error Handling',             // Learning how to manage errors and exceptions
        'Input and Output',           // Understanding how to read from and write to the console or files
        'Object-Oriented Programming',// Grasping concepts like classes, objects, inheritance, and polymorphism
        'Recursion',                  // Learning how functions can call themselves and the base case logic
        'Data Structures',            // Understanding arrays, lists, sets, and maps/dictionaries
      ];
      
    

    return (
    <div style={{ backgroundColor: currentTheme.footernavbar }} className="min-h-screen flex justify-center items-center">
    <div className="w-full grid grid-cols-4 gap-4 px-36 mb-44">
        {/* Left Column with Modified Row Span */}
        <div className=" col-span-1 grid grid-rows-11 gap-4 text-white ">
            {/* First Grid Element - Spans 2 Rows */}
            <div className="row-span-4 section">
                <p className='h-full press-start-2p-regular text-center mt-36'>Introduction</p>
            </div>
            {/* Second and Third Grid Elements - Each occupies 1 row */}
            <div className='row-span-3 section flex justify-center items-center'>
                <p className='h-full press-start-2p-regular text-center mt-36'>Working with logic and debugging!</p>
            </div>
            <div className='row-span-4 section flex justify-center items-center'>
                <p className='h-full press-start-2p-regular text-center mt-44'>Miscellaneous</p>
                
            </div>
        </div>
        
        {/* Right Component */}
        <div className="press-start-2p-regular text-sm col-span-3 -mb-4">
        <ul>
            {list.map((element, index) => (
            <li key={index} className="">
                <div className="flex justify-center items-center w-full">
                <button 
                    onClick={onAlgoClick} 
                    className="algobutton mb-5" 
                    style={{ height: 60, scrollSnapAlign: 'start', borderColor: currentTheme.borderColor, color: currentTheme.textColor }}
                >
                    <p className="text-left mx-10">{element}</p>
                </button>
                </div>
            </li>
            ))}
        </ul>
        </div>
    </div>
    </div>


    )
}

export default AltAlgoList;