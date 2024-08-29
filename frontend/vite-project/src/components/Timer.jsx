import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Timer = ({ timeLeft, mistakes, onDurationChange, durations }) => {
    const { currentTheme } = useContext(ThemeContext);

    return (
        <div className='flex flex-row gap-5'>
            <div className='' style={{ color: currentTheme.textColor}}>
                <h2 className='jost-regular' style={{ textAlign: 'center' }}>Time Left:</h2>
                <div className='section p-4 h-20 w-full' style={{ borderColor: currentTheme.borderColor, color: currentTheme.textColor }}>
                    <div className='flex justify-center items-center'>
                        <h4 className='text-red-500 text-5xl'>{timeLeft}</h4>
                    </div>
                </div>
            </div>

            
            <br></br>

            <div className='' style={{ color: currentTheme.textColor}}>
                <h2 className='jost-regular' style={{ textAlign: 'center' }}>Mistakes:</h2>
                <div className='section p-4 h-20 w-full' style={{ borderColor: currentTheme.borderColor, color: currentTheme.textColor }}>
                    <div className='flex justify-center items-center'>
                        <h4 className='text-red-500 text-5xl'>{mistakes}</h4>
                    </div>
                </div>
            </div>

            <br></br>

            <div className='' style={{ color: currentTheme.textColor}}>
                <h2 className='jost-regular' style={{ textAlign: 'center' }}>Set Duration:</h2>
                <div className='section p-4 h-20 w-full' style={{ borderColor: currentTheme.borderColor, color: currentTheme.textColor }}>
                    <div className='flex justify-center items-center flex-grow gap-5'>
                        {durations.map((duration) => (
                            <button
                                key={duration}
                                className='px-2 py-2 rounded transition-all 0.5s border mx-1' 
                                style={{ borderColor: '#d0d3d4' }} 
                                onClick={() => onDurationChange(duration)
                                }
                            >
                                {duration}s
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
