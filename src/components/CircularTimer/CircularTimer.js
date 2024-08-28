import React, { useEffect, useState} from "react";

const CircularTimer = ({ minutes, onEnd }) => {
    const [time, setTime] = useState(minutes * 60);
    const [ isActive, setIsActive ] = useState(false);
    
    React.useEffect(() => {
        let interval = null;

        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((previewTime) => previewTime - 1);
            }, 1000);
        } else if (time === 0) {
            clearInterval(interval);
            onEnd();
        }
        return () => clearInterval(interval);

    }, [isActive, time, onEnd]);

    const startTimer = () => {
        setIsActive(true);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTime(minutes * 60);
    }

    const minutesDisplay = Math.floor(time / 60);
    const secondsLeft = time % 60;
    
    return (
        <div className="circular-timer">
            <div className="timer-circle">
                <svg>
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle 
                        cx="50" 
                        cy="50" 
                        r="45"
                        style={{ strokeDashoffset: 283 - (283 * time) / (minutes * 60) }}
                    ></circle>
                </svg>
                <div className="timer-text">{`${minutesDisplay} min`}</div>
            </div>
            <button onClick={startTimer}>Start</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default CircularTimer;