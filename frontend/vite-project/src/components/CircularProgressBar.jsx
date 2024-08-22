import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ WPM, CPM, timeLeft }) => {
  let progress_size = 115;
  // if (timeLeft === 0) {
  //   progress_size = 250;
  // }

  return (
    <div className='flex flex-row justify-evenly gap-10'>
      <div className='transition-all ease-in-out 0.5s' style={{ width: progress_size, height: progress_size }}>
        <CircularProgressbarWithChildren 
          value={WPM} 
          maxValue={150} 
          text={`${WPM}`} 
          circleRatio={0.75} 
          styles={{
            trail: {
              strokeLinecap: 'rounded',
              transform: 'rotate(-135deg)',
              transformOrigin: 'center center',
            },
            path: {
              strokeLinecap: 'rounded',
              pathTransition: 'stroke-dashoffset 0.5s ease 0s',
              pathTransitionDuration: 0.75,
              transform: 'rotate(-135deg)',
              transformOrigin: 'center center'
            },
          }}
        >
          <div style={{ fontSize: 10, marginTop: 35 }}>
            WPM
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className='transition-all ease-in 1s' style={{ width: progress_size, height: progress_size }}>
        <CircularProgressbarWithChildren 
          value={CPM} 
          maxValue={1000} 
          text={`${CPM}`} 
          circleRatio={0.75} 
          styles={{
            trail: {
              strokeLinecap: 'rounded',
              transform: 'rotate(-135deg)',
              transformOrigin: 'center center',
            },
            path: {
              strokeLinecap: 'rounded',
              pathTransition: 'stroke-dashoffset 0.5s ease 0s',
              pathTransitionDuration: 0.75,
              transform: 'rotate(-135deg)',
              transformOrigin: 'center center'
            },
          }}
        >
          <div style={{ fontSize: 10, marginTop: 35 }}>
            CPM
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default CircularProgressBar;
