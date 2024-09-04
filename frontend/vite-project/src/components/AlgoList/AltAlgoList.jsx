import React, {useContext, useState} from 'react'
import { ThemeContext } from '../../ThemeContext';

const AltAlgoList = ({ onAlgoClick }) => {
    const { currentTheme } = useContext(ThemeContext);
    const [accordionOpenIndex, setAccordionOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
    setAccordionOpenIndex(accordionOpenIndex === index ? null : index);
    };
    
    const content = `Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content
                    Random Content`;

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
      
    const colourTransition = "transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300";

return (
<div style={{ backgroundColor: currentTheme.footernavbar }} className="min-h-screen flex justify-center items-center">
    <div className="w-full grid grid-cols-4 gap-4 px-36 mb-44">
        {/* Left Column with Modified Row Span */}
        <div className=" col-span-1 grid grid-rows-11 gap-4 text-white ">
            {/* First Grid Element - Spans 2 Rows */}
            <div className={`row-span-4 section bg-indigo-400 hover:bg-blue-400 border-0 ${colourTransition}`}>
                <p className='h-full press-start-2p-regular text-center mt-36'>Introduction</p>
            </div>
            {/* Second and Third Grid Elements - Each occupies 1 row */}
            <div className={`row-span-4 section bg-indigo-500 hover:bg-blue-500 border-0 ${colourTransition}`}>
                <p className='h-full press-start-2p-regular text-center mt-36'>Working with logic and debugging!</p>
            </div>
            <div className={`row-span-3 section bg-indigo-600 hover:bg-blue-700 border-0 ${colourTransition}`}>
                <p className='h-full press-start-2p-regular text-center mt-28'>Miscellaneous</p>
            </div>
        </div>
        
        {/* Right Component */}
        <div className="col-span-3 -mb-4">
        <ul>
        {list.map((element, index) => (
            <li key={index} className="mb-5">
            {/* <div className="flex justify-center items-center w-full"> */}
                <button
                onClick={() => handleAccordionClick(index)}
                className="algobutton mb-5 flex justify-between"
                style={{
                    height: 60,
                    borderColor: currentTheme.borderColor,
                    color: currentTheme.textColor,
                }}
                >
                <span className="text-left">{element}</span>
                {accordionOpenIndex === index ? <span>-</span> : <span>+</span>}
                </button>
                <div
                className={`w-full overflow-hidden transition-all duration-200 ease-in-out border-y-4 bg-blue-600 border-white rounded-md text-white text-sm ${
                    accordionOpenIndex === index ? 'block opacity-100' : 'hidden opacity-0'
                }`}
                >
                <span className='text-sm jost-regular px-4'>
                    {content}
                </span>
                </div>
            {/* </div> */}
            </li>
        ))}
        </ul>
        </div>
    </div>
</div>


    )
}

export default AltAlgoList;