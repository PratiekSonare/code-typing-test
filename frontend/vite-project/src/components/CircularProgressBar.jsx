import React, {useContext} from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeContext } from '../ThemeContext';

const CircularProgressBar = ({ WPM, CPM, timeLeft }) => {
  const { currentTheme } = useContext(ThemeContext);
  let progress_size = 120;
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
          background={true}
          backgroundPadding={5}
           
          styles={{
            background: {
              fill: '#232323'
            },
            trail: {
              stroke: '#232323',
              strokeLinecap: 'rounded',
              transform: 'rotate(-135deg)',
              transformOrigin: 'center center',
            },
            path: {
              // stroke: '#bde700',
              strokeLinecap: 'rounded',
              pathTransition: 'stroke-dashoffset 0.5s ease 0s',
              pathTransitionDuration: 0.75,
              transform: 'rotate(-135deg)',
              transformOrigin: 'center center'
            },
          }}
        >
          <div style={{ fontSize: 10, marginTop: 35, color: currentTheme.textColor }}>
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
          background={true}
          backgroundPadding={5}

          styles={{
            background: {
              fill: '#232323'
            },
            trail: {
              stroke: '#232323',
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
          <div style={{ fontSize: 10, marginTop: 35, color: currentTheme.textColor }}>
            CPM
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default CircularProgressBar;
