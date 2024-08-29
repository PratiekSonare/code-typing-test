import React, {useContext} from 'react'
import Button from '@mui/material/Button';
import { ThemeContext } from '../../ThemeContext';

const AlgoList = ({ onAlgoClick }) => {
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
        'File Handling',              // Reading from and writing to files
        'Libraries and Frameworks',   // Knowing how to use pre-built code to enhance development
        'Asynchronous Programming',   // Understanding concepts like promises, async/await, and callbacks
        'Debugging',                  // Learning techniques to find and fix errors in code
        'Testing',                    // Writing tests to ensure code works as expected
        'Version Control',            // Using systems like Git to manage changes in code over time
        'Documentation',              // Writing clear comments and documentation to explain code functionality
      ];
      
    

  return (
    <div style={{ height: '400px', overflowY: 'auto', scrollSnapType: 'y mandatory' }} className='invisible-scrollbar press-start-2p-regular text-sm'>
        <ul>
            {list.map((element, index) => (
                <li key = {index} className='mb-4'>
                <button onClick={onAlgoClick} className='algobutton' style={{ scrollSnapAlign: 'start', borderColor: currentTheme.borderColor }}>
                    {element}
                </button>  
                </li>
            ))}
        </ul>
    </div>
  )
}

export default AlgoList