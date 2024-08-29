import React, { useState } from 'react';
import './Modal.css';

function Modal({ onTimeChange }) {
  const [time, setTime] = useState(15);
  const [isOpen, setIsOpen] = useState(false);

  const handleIncrease = () => {
    setTime(time + 10);
  };

  const handleDecrease = () => {
    if (time > 10) {
      setTime(time - 10);
    }
  };

  const handleChange = (e) => {
    setTime(Number(e.target.value));
  };

  const handleSubmit = () => {
    onTimeChange(time);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} style={{ fontSize: '2em', padding: '10px 20px' }}>Set Time</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="modal-close" onClick={() => setIsOpen(false)}>×</span>
            <div className="modal-input-container">
              <button className="modal-button" onClick={handleDecrease}>-</button>
              <input
                type="number"
                className="modal-input"
                value={time}
                onChange={handleChange}
              />
              <button className="modal-button" onClick={handleIncrease}>+</button>
            </div>
            <button className="modal-start-button" onClick={handleSubmit}>Start</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;