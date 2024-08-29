import React from 'react';

function Timer({ minutes, seconds, isActive, onStart, onReset }) {
  return (
    <div>
      <div style={{ fontSize: '4em', margin: '20px' }}>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      {!isActive ? (
        <button onClick={onStart} style={{ fontSize: '2em', padding: '10px 20px' }}>Start</button>
      ) : (
        <button onClick={onReset} style={{ fontSize: '2em', padding: '10px 20px' }}>Reset</button>
      )}
    </div>
  );
}

export default Timer;