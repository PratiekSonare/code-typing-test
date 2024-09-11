import React, { useRef } from 'react';
import SpeedTypingGame from './SpeedTypingGame';
import Banner from './Banner';
import Language from './Language';
import SpeedTypingGameAlt from './SpeedTypingGameAlt';
import AltAlgoList from './AlgoList/AltAlgoList';

// import Accordion from '../components/AlgoList/Accordion';

const HomePage = () => {
  const nextComponentRef = useRef(null);

  const scrollToNextComponent = () => {
    if (nextComponentRef.current) {
      nextComponentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languageRef = useRef(null);

  const scrollToLanguage = () => {
    if (languageRef.current) {
      languageRef.current.scrollIntoView({ behavior: 'smooth', duration: 100 });
    }
  };

  return (
    <div>
      <div>
      <Banner scrollToNextComponent={scrollToLanguage} />
        {/* <div ref={languageRef}> */}
          <Language scrollToNextComponent={scrollToNextComponent}/>
          <div ref={nextComponentRef}>
          <AltAlgoList />
          </div>
          {/* <Accordion /> */}
        {/* </div> */}
          {/* <Language  /> */}
          {/* <div ref={nextComponentRef}> */}
            <SpeedTypingGameAlt /> 
            {/* <SpeedTypingGame /> */}
          {/* </div> */}
          <div>
            
          </div>
        </div>
      </div>
    // </div>
  );
};

export default HomePage;