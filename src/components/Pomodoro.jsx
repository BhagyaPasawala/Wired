import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [seconds, setSeconds] = useState(0);  
  const [isRunning, setIsRunning] = useState(false);  
  
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}s`;
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);  
  };

  const handleReset = () => {
    setSeconds(0); 
    setIsRunning(false); 
  };

  return (
    <div className="pomodoro-timer">
      <h1>{formatTime(seconds)}</h1>
      <div className="pomodoro-buttons">
        <button onClick={handleStartPause}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
