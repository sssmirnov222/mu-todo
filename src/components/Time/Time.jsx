import React, { useState, useEffect } from 'react';
import './Time.css';

const Time = ({ minutes = 0, seconds = 0 }) => {
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [[m, s], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if (paused || over) return;

    if (m === 0 && s === 0) {
      setOver(true);
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([Math.abs(m), Math.abs(s - 1)]);
    }
  };

  const reset = () => {
    setTime([parseInt(minutes), parseInt(seconds)]);
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="timer">
      <p className="timer__time">{`${m !== null ? m.toString().padStart(2, '0') : 0}:${s !== null ? s.toString().padStart(2, '0') : 0}`}</p>
      <div className="timer__up">{over ? "Time's up!" : ''}</div>
      <button className="timer__function" onClick={() => setPaused(!paused)}>
        {paused ? '►' : 'II'}
      </button>
      <button className="timer__restart" onClick={() => reset()}>
        ⬛
      </button>
    </div>
  );
};

export default Time;
