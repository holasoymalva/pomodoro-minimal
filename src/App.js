// src/App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import ProgressBar from './components/ProgressBar';
import Modal from './components/Modal/Modal';

function App() {
  const [minutes, setMinutes] = useState(25); // Tiempo inicial del temporizador
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [level, setLevel] = useState(() => {
    return JSON.parse(localStorage.getItem('level')) || 1;
  });

  useEffect(() => {
    let interval = null;
    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (minutes === 0 && seconds === 0 && isActive) {
      clearInterval(interval);
      alert('¡Lograste tu objetivo!');
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  useEffect(() => {
    localStorage.setItem('level', JSON.stringify(level));
  }, [level]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsActive(false);
  };

  const handleTimeChange = (time) => {
    setMinutes(time);
  };

  const increaseLevel = () => {
    setLevel(level + 1);
  };

  return (
    <div className="App" style={{ backgroundColor: '#000', height: '100vh', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Pomodoro by minima-list</h1>
      <ProgressBar level={level} />
      <Timer minutes={minutes} seconds={seconds} isActive={isActive} onStart={startTimer} onReset={resetTimer} />
      {/* <button onClick={increaseLevel}>Increase Level</button> */}
      <Modal onTimeChange={handleTimeChange} />
    </div>
  );
}

export default App;