import React, { useState, useEffect, useContext } from 'react';
import './SpeedTypingGame.css';
import TypingArea from './TypingArea'; // Import the TypingArea component
import CircularProgressBar from './CircularProgressBar';
import Timer from './Timer';
import { ThemeContext } from '../ThemeContext';

const SpeedTypingGame = () => {
    const { currentTheme } = useContext(ThemeContext);
    
    const paragraphs = [
        `Once upon a time, in a land far away, there was a small village nestled between the mountains and the sea. Every morning, the sun would rise over the peaks, casting a golden glow on the rooftops. Children played in the meadows, chasing butterflies and laughing with joy. The village was a place of peace and harmony, where the simple pleasures of life were cherished. The sound of laughter and music would often drift through the air, blending with the gentle rustling of leaves and the distant call of birds.`,
        `In the evenings, families gathered around the fire to share stories and enjoy the warmth of each other's company. The crackling of the flames was accompanied by the rich aroma of roasting marshmallows and freshly baked bread. Elders would recount tales of old, their voices weaving through the night air like threads of magic. Children would listen with wide-eyed wonder, their imaginations ignited by the adventures and heroes of the past.`,
        `The quick brown fox jumps over the lazy dog. Every morning, he leaps across the grassy fields with boundless energy and enthusiasm. The fox’s sleek fur glistens under the morning sun as he darts from one side of the meadow to the other. His agility and speed are unmatched, and he often challenges the other animals to races. Despite the fox’s playful nature, he is always on the lookout for any signs of danger or adventure.`,
        `In the heart of the city, the bustling streets are filled with the sounds of traffic and chatter. People move swiftly, each absorbed in their daily routines and tasks. The air is a mix of scents from street food vendors and the occasional waft of exhaust fumes. Neon signs and advertisements light up the cityscape, adding a vibrant energy to the urban environment. Amidst the hustle and bustle, there are quiet moments of connection as strangers share smiles or brief conversations.`,
        `Technology has revolutionized the way we communicate and work. From instant messaging to video calls, staying connected has never been easier or more convenient. Social media platforms and apps have become integral parts of daily life, allowing people to share their experiences and stay updated with the world. Innovations in technology continue to shape our interactions and provide new tools for productivity, creativity, and learning.`,
        `The old library was a treasure trove of knowledge, with shelves stacked high with books of every genre. Visitors would spend hours exploring its quiet, inviting corners. The scent of aged paper and ink filled the air, creating an atmosphere of serenity and contemplation. Each book was a gateway to a different world, and the library’s wooden reading tables and comfortable chairs offered a perfect spot for readers to lose themselves in their literary adventures.`,
        `As the sun set behind the mountains, the sky transformed into a canvas of vibrant hues. The tranquil evening was a perfect end to a day full of adventure and discovery. Shades of orange, pink, and purple blended seamlessly as the stars began to twinkle in the twilight sky. The cool evening breeze carried with it the distant sounds of crickets and rustling leaves, creating a peaceful ambiance that invited reflection and relaxation.`
    ];
    
    const [isHidden, setIsHidden] = useState(false);
    const [typingText, setTypingText] = useState([]);
    const [inpFieldValue, setInpFieldValue] = useState('');
    const [duration, setDuration] = useState(10);
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
            // Handle backspace key
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
        } else if (event.key === 'Enter') {
            // Skip to the next non-space character
            while (charIndex < characters.length && characters[charIndex].innerText === '_') {
                setCharIndex(charIndex + 1);
            }
            if (charIndex < characters.length) {
                characters[charIndex].classList.add('active');
            }
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
        setTimeLeft(newDuration); // Reset time left to the new duration
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
        // <div className={`box ${isHidden ? 'hidden' : ''}`}>
            <div className='flex justify-center items-center h-screen' style={{ background: currentTheme.background, color: currentTheme.textColor }}>
                <div className='flex w-screen'>
                    <div className="flex-none w-[15vw] p-4 ml-10">
                        <CircularProgressBar WPM={WPM} CPM={CPM} timeLeft={timeLeft} />
                    </div>
                    <div className='flex-grow p-4 mx-6'>
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
                    <div className='flex-grow p-4 mr-10'>
                        <Timer 
                            timeLeft={timeLeft} 
                            mistakes={mistakes}
                            onDurationChange={handleDurationChange}
                            durations={[10, 30, 60, 120]} 
                        />
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default SpeedTypingGame;
