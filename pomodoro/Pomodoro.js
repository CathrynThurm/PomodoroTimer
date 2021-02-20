import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import FormatMessages from "./messages";
import ShouldPlaySound from "./PlaySounds.js";
import IncrementFocus, {IncrementBreak} from "./IncrementTime";
import PlayPause, {StopSession} from "./StartStopPause";
import UpdateProgressBar from "./ProgressBar";


function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [time, setTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [initialFocus, setInitialFocus] = useState(25);
  const [initialBreak, setInitialBreak] = useState(5);
  const [progressPercent, setProgressPercent] = useState(100);
  const [progressVal, setProgressVal] = useState(0);
  const [paused, setPaused] = useState(false);

  const minFocus = 5;
  const minBreak = 1
  const maxFocus = 60
  const maxBreak = 15

   
  const handleFocusDecrease = () => {
    if(time-5 > minFocus) {
      setTime(time - 5)
    setInitialFocus(initialFocus - 5)}
    else {
      setTime(minFocus)
      setInitialFocus(minFocus)
    }
  }
  
  const handleFocusIncrease = () => {
    if(time+5 < maxFocus){
      setTime(time + 5)
    setInitialFocus(initialFocus + 5)}
    else {setTime(maxFocus)
         setInitialFocus(maxFocus)}
  }
  
  const handleBreakDecrease = () => {
        if(breakTime-1 > minBreak) {
          setBreakTime(breakTime - 1)
        setInitialBreak(initialBreak - 1)}
    else {setBreakTime(minBreak)
         setInitialBreak(minBreak)}
  }
  const handleBreakIncrease = () => {
    if(breakTime+1 < maxBreak){
      setBreakTime(breakTime + 1)
    setInitialBreak(initialBreak + 1)}
    else {
      setBreakTime(maxBreak)
    setInitialBreak(maxBreak)}
  }

  function playPause() {
    if(isTimerRunning) {
      setIsTimerRunning(!isTimerRunning)
      setPaused(true)
      }
    else {
      setIsTimerRunning(!isTimerRunning)
      setPaused(false)
      }
  }
  
  const handleStop = () => {
    setIsTimerRunning(false)
    setTime(initialFocus)
    setBreakTime(initialBreak)
    setProgressPercent(100)
    
    setPaused(false)
  }

  function startSession() {
    setTime(initialFocus)
    setBreakTime(initialBreak)
    setProgressVal(0)
  }

  

  useInterval(
    () => {
      // What should happen when the timer is running
      if(!paused) {
       if(time > 0) {
         setTime(time - 1/60)
         setProgressVal(time)
         setProgressPercent(time/initialFocus * 100)
         ShouldPlaySound(time, breakTime, initialBreak)
       }
      
      else if(time === 0 && breakTime > 0) {
        setBreakTime(breakTime - 1/60)
        setProgressVal(initialFocus - breakTime)
        setProgressPercent((breakTime/initialBreak * 100))
        ShouldPlaySound(time, breakTime, initialBreak)

      }
      else if (breakTime <= 0 && time <= 0) {
        startSession()
        ShouldPlaySound(time, breakTime, initialBreak)

      }
       else {setTime(0)
        ShouldPlaySound(time, breakTime, initialBreak)
        }
      }
    },
    isTimerRunning ? 1000 : null
  );
 
  
  return (
    <div className="pomodoro">
      <div className="row">     
       <IncrementFocus initialFocus={initialFocus} handleFocusDecrease={handleFocusDecrease} handleFocusIncrease={handleFocusIncrease}/>
      <IncrementBreak initialBreak={initialBreak} handleBreakDecrease={handleBreakDecrease} handleBreakIncrease={handleBreakIncrease} />
      </div>

      <div className="row">
        <div className="col">
        <PlayPause playPause={playPause} isTimerRunning={isTimerRunning} classNames={classNames} />
        <StopSession handleStop={handleStop} isTimerRunning={isTimerRunning} paused={paused} />
        </div>
      </div>
       <div>
         <FormatMessages time={time} breakTime={breakTime} initialBreak={initialBreak} initialFocus={initialFocus} paused={paused} isTimerRunning={isTimerRunning} />
        </div>
        <UpdateProgressBar progressVal={progressVal} progressPercent={progressPercent} isTimerRunning={isTimerRunning} Paused = {paused}/>
      </div>
  );
}

export default Pomodoro;
