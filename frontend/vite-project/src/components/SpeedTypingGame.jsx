import React, { useState, useEffect } from 'react';
import './SpeedTypingGame.css';
import TypingArea from './TypingArea'; // Import the TypingArea component
import CircularProgressBar from './CircularProgressBar';
import Timer from './Timer';

const SpeedTypingGame = () => {
    const paragraphs = [
        `Once upon a time, in a land far away, there was a small village nestled between the mountains and the sea. The villagers lived peacefully, tending to their farms and fishing in the clear blue waters. Every morning, the sun would rise over the peaks, casting a golden glow on the rooftops. Children played in the meadows, chasing butterflies and laughing with joy. In the evenings, families gathered around the fire to share stories and enjoy the warmth of each other's company.`
    ];

    const [isHidden, setIsHidden] = useState(false);
    const [typingText, setTypingText] = useState([]);
    const [inpFieldValue, setInpFieldValue] = useState('');
    const [duration, setDuration] = useState(3); // Duration in minutes
    const [timeLeft, setTimeLeft] = useState(duration); // Time left in seconds
    const [charIndex, setCharIndex] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [WPM, setWPM] = useState(0);
    const [CPM, setCPM] = useState(0);
    const [currentParagraph, setCurrentParagraph] = useState(paragraphs[0]);

    const loadParagraph = () => {
        const ranIndex = Math.floor(Math.random() * paragraphs.length);
        setCurrentParagraph(paragraphs[ranIndex]);
        const inputField = document.getElementsByClassName('input-field')[0];
        document.addEventListener("keydown", () => inputField.focus());
        const content = Array.from(paragraphs[ranIndex]).map((letter, index) => (
            <span
                key={index}
                style={{ color: (letter !== ' ') ? 'black' : 'transparent' }}
                className={`char ${index === 0 ? 'active' : ''}`}
            >
                {letter !== ' ' ? letter : '_'}
            </span>
        ));
        setTypingText(content);
        setInpFieldValue('');
        setCharIndex(0);
        setMistakes(0);
        setIsTyping(false);
    };

    const handleKeyDown = (event) => {
        const characters = document.querySelectorAll('.char');
        if (event.key === 'Backspace' && charIndex > 0 && charIndex < characters.length && timeLeft > 0) {
            if (characters[charIndex - 1].classList.contains('correct')) {
                characters[charIndex - 1].classList.remove('correct');
            }
            if (characters[charIndex - 1].classList.contains('wrong')) {
                characters[charIndex - 1].classList.remove('wrong');
                setMistakes(mistakes - 1);
            }
            characters[charIndex].classList.remove('active');
            characters[charIndex - 1].classList.add('active');
            setCharIndex(charIndex - 1);
            let cpm = (charIndex - mistakes - 1) * (60 / (duration - timeLeft));
            cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
            setCPM(parseInt(cpm, 10));
            let wpm = Math.round(((charIndex - mistakes) / 5) / (duration - timeLeft) * 60);
            wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
            setWPM(wpm);
        }
    };

    const initTyping = (event) => {
        const characters = document.querySelectorAll('.char');
        let typedChar = event.target.value;
        if (charIndex < characters.length && timeLeft > 0) {
            let currentChar = characters[charIndex].innerText;
            if (currentChar === '_') currentChar = ' ';
            if (!isTyping) {
                setIsTyping(true);
            }
            if (typedChar === currentChar) {
                setCharIndex(charIndex + 1);
                if (charIndex + 1 < characters.length) characters[charIndex + 1].classList.add('active');
                characters[charIndex].classList.remove('active');
                characters[charIndex].classList.add('correct');
            } else {
                setCharIndex(charIndex + 1);
                setMistakes(mistakes + 1);
                characters[charIndex].classList.remove('active');
                if (charIndex + 1 < characters.length) characters[charIndex + 1].classList.add('active');
                characters[charIndex].classList.add('wrong');
            }

            if (charIndex === characters.length - 1) setIsTyping(false);

            let wpm = Math.round(((charIndex - mistakes) / 5) / (duration - timeLeft) * 60);
            wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
            setWPM(wpm);

            let cpm = (charIndex - mistakes) * (60 / (duration - timeLeft));
            cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
            setCPM(parseInt(cpm, 10));
        } else {
            setIsTyping(false);
        }
    };

    const resetGame = () => {
        setIsTyping(false);
        setTimeLeft(duration);
        setCharIndex(0);
        setMistakes(0);
        setTypingText([]);
        setCPM(0);
        setWPM(0);
        const characters = document.querySelectorAll('.char');
        characters.forEach(span => {
            span.classList.remove("correct");
            span.classList.remove('wrong');
            span.classList.remove('active');
        });
        if (characters.length > 0) {
            characters[0].classList.add('active');
        }
        loadParagraph();
    };

    const handleDurationChange = (newDuration) => {
        setDuration(newDuration);
        setTimeLeft(newDuration * 60); // Reset time left to the new duration
        resetGame(); // Reload the paragraph and reset the game
    };

    useEffect(() => {
        loadParagraph();
    }, []);

    useEffect(() => {
        let interval;
        if (isTyping && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
                let cpm = (charIndex - mistakes) * (60 / (duration - timeLeft));
                cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
                setCPM(parseInt(cpm, 10));
                let wpm = Math.round(((charIndex - mistakes) / 5) / (duration - timeLeft) * 60);
                wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
                setWPM(wpm);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(interval);
            setIsTyping(false);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isTyping, timeLeft]);

    useEffect(() => {
        if (timeLeft === 0) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    }, [timeLeft]);

    return (
        // className={`box ${isHidden ? 'hidden' : ''}`}
        <div>
            <div className='flex justify-center items-center'>
                <div className='flex w-full'>
                    <div className="flex-none w-[15vw] p-4 ml-32">
                        <CircularProgressBar WPM={WPM} CPM={CPM} timeLeft={timeLeft} />
                    </div>
                    <div className='flex-grow p-4'>
                        <input
                            type="text"
                            className="input-field"
                            value={inpFieldValue}
                            onChange={initTyping}
                            onKeyDown={handleKeyDown}
                        />
                        <TypingArea
                            typingText={typingText}
                            inpFieldValue={inpFieldValue}
                            timeLeft={timeLeft}
                            mistakes={mistakes}
                            WPM={WPM}
                            CPM={CPM}
                            initTyping={initTyping}
                            handleKeyDown={handleKeyDown}
                            resetGame={resetGame}
                        />
                    </div>
                    <div className='flex-none w-[15vw] p-4'>
                        <Timer 
                            timeLeft={timeLeft} 
                            mistakes={mistakes}
                            onDurationChange={handleDurationChange}
                            durations={[10, 30, 60, 120]} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeedTypingGame;
