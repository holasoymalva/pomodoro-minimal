import React, { useState} from "react";

const TimerModal = ({ setMinutes, closeModal }) => {
    const [inputMinutes, setInputMinutes] = useState(15);

    const handleMinutesChange = (e) => {
        setInputMinutes(e.target.value);
    };

    const increaseMinutes = () => {
        setInputMinutes((prevMinutes) => parseInt(prevMinutes) + 1);
    };

    const decreaseMinutes = () => {
        setInputMinutes((prevMinutes) => ( prevMinutes > 10 ? parseInt(prevMinutes) - 10 : 0));
    };

    const handleSubmit = () => {
        setMinutes(inputMinutes);
        closeModal();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={decreaseMinutes}>-</button>
                <input type="number" value={inputMinutes} onChange={handleMinutesChange} min="0"/>
                <button onClick={increaseMinutes}>+</button>
                <button onClick={handleSubmit}>Start</button>
            </div>
        </div>
    );
};

export default TimerModal;