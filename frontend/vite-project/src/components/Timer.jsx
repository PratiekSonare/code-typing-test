import React from 'react';

const Timer = ({ timeLeft, mistakes, onDurationChange, durations }) => {
    return (
        <div>
            <div className='section p-4'>
                <div className='flex flex-row justify-evenly items-center'>
                    <h2>Time Left:</h2>
                    <h4 className='text-red-500 text-3xl'>{timeLeft}</h4>
                </div>
            </div>
            
            <br></br>

            <div className='section p-4'>
                <div className='flex flex-row justify-evenly items-center'>
                    {/* <div className=''> */}
                        <h2>Mistakes:</h2>
                        <h4 className='text-red-500 text-3xl'>{mistakes}</h4>                       
                    {/* </div> */}
                </div>
            </div>

            <br></br>

            <div className='section p-4'>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='mb-2'>Set Duration:</h2>
                    <div className='flex flex-wrap gap-4 justify-center items-center'>
                        {durations.map((duration) => (
                            <button
                                key={duration}
                                className='px-2 py-2 border rounded transition-all 0.5s' 
                                onClick={() => onDurationChange(duration)}
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
