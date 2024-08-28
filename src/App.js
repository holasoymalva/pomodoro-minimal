import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';
import CircularTimer from './components/CircularTimer/CircularTimer';
import TimerModal from './components/TimerModal/TimerModal';
import { useEffect, useState } from 'react';

function App() {
  const [level, setLevel] = useState(
    parseInt(localStorage.getItem('level') ) || 1
  )
  const [minutes, setMinutes] = useState(15);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('level', level);
  }, [level]);

  const handleTimerEnd = () => {
    alert('Time is up!');
    setLevel((prevLevel) => prevLevel + 1);
  };

  return (
    <div className="app">
      <h1>Pomodoro minima-list</h1>
      <ProgressBar level={level} />
      <CircularTimer minutes={minutes} onEnd={handleTimerEnd} />
      <button onClick={()=>setShowModal(true)}>Set Timer</button>
      {showModal && (
        <TimerModal 
          setMinutes={setMinutes} 
          closeModal={() => setShowModal(false)} 
        />  
      )}

    </div>
  );
}

export default App;
