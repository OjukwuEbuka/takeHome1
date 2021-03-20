// Globals
import "./styles.scss";
import React, { useEffect, useState } from "react";

// Components
import { Button } from "components/Button";

// Sub-component
function Expired() {
  return (
    <div className="aura-expired">
      <div className="aura-expired-emoji">⚠️</div>
      <div className="aura-expired-text">Timer expired!</div>
    </div>
  );
}

// Component
function Timer() {
  // Hooks - state
  const [counter, setCounter] = useState(0);
  const [displayTime, setDisplayTime] = useState('0:00');
  const [started, setStarted] = useState(false);

  // TODO: implement counter...

  // set timer interval
  let countTimer;

  //handle reset button click
  const handleReset = () => {
    setCounter(59);
    setDisplayTime('1:00');
    setStarted(false);
    clearInterval(countTimer);
  }

  // handle start button click
  const handleStart = () => {
    setStarted(true);
  }

  useEffect(()=>{
    if(counter > 0 && started){
      let showTime = counter;
      if(counter < 10){
        showTime = `0${counter}`;
      }
      setDisplayTime(`0:${showTime}`);
      countTimer = setInterval(()=>{
        setCounter(counter => counter - 1);
        console.log(counter);
      }, 1000);
    } 

    if(counter === 0){
      setDisplayTime(`0:00`);
    }

    return () => clearInterval(countTimer);
    
  }, [counter, started])
  

  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>

      <div className="aura-page-content">
        <div className="aura-timer-clock">{displayTime}</div>
        {counter <= 0 ? <Expired /> : null}

        <div className="aura-timer-buttons">
          <Button onClick={handleStart}>Start</Button>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
