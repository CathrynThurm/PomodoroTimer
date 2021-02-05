import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import hoursToDuration, {secondsToDuration} from 
"../utils/duration/index.js"

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [time, setTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [initialFocus, setInitialFocus] = useState(25);
  const [initialBreak, setInitialBreak] = useState(5);
  const [paused, setPaused] = useState(false);
  const [progressVal, setProgressVal] = useState(0);
  const [progressPercent, setProgressPercent] = useState(100);
  

   let alarm = new Audio(`http://localhost:3000/public/alarm/submarine-dive-horn.mp3`)


  const playSound = (sound) => {
    try {sound.play()}
    catch(error) {console.log(error)}
  }
   
  const handleFocusDecrease = () => {
    if(time-5 > 5) {
      setTime(time - 5)
    setInitialFocus(initialFocus - 5)}
    else {
      setTime(5)
      setInitialFocus(5)
    }
  }
  
  const handleFocusIncrease = () => {
    if(time+5 < 60){
      setTime(time + 5)
    setInitialFocus(initialFocus + 5)}
    else {setTime(60)
         setInitialFocus(60)}
  }
  
  const handleBreakDecrease = () => {
        if(breakTime-1 > 1) {
          setBreakTime(breakTime - 1)
        setInitialBreak(initialBreak - 1)}
    else {setBreakTime(1)
         setInitialBreak(1)}
  }
  const handleBreakIncrease = () => {
    if(breakTime+1 < 15){
      setBreakTime(breakTime + 1)
    setInitialBreak(initialBreak + 1)}
    else {
      setBreakTime(15)
    setInitialBreak(15)}
  }

  function playPause(event) {

    
    if(isTimerRunning) {
     
      setIsTimerRunning(!isTimerRunning)
      setPaused(true)
      }
    else {

      setIsTimerRunning(!isTimerRunning)
      setPaused(false)
      }
  }
  
  const handleStop = (event) => {
    setIsTimerRunning(false)
    setTime(initialFocus)
    setBreakTime(initialBreak)
    setProgressPercent(100)
    
    setPaused(false)
  }


  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      if(!paused) {
       if(time > 0) {
         setTime(time - 1/60)
         setProgressVal(time)
         setProgressPercent(getProgressPercent(time, initialFocus))
       }
      
      else if(time === 0 && breakTime > 0) {
        setBreakTime(breakTime - 1/60)
        setProgressVal(initialFocus - breakTime)
        setProgressPercent(getProgressPercent(breakTime, initialBreak))
      }
      else if (breakTime <= 0 && time <= 0) {
        setTime(initialFocus)
        setBreakTime(initialBreak)
        setProgressVal(0)
      }
       else {setTime(0)
          //playSounds(alarm)
        }
      }
    },
    isTimerRunning ? 1000 : null
  );

  const getProgressPercent = (currentTime, totalTime) => {

    return (currentTime/totalTime * 100)
  }
  
    const setMessage = () => {
      let message = ""
  if(time === 0 && breakTime !==0) {
    message = `On Break for ${hoursToDuration(initialBreak)} minutes`
  }
  else if (paused) {message = "Paused"}
  else {
    message = `Focusing for ${hoursToDuration(initialFocus)} minutes`
  }
      return message
    }

  const RemainingMessage = () => {
    let message = ""

    if(time === 0 && breakTime !== 0) {
      message = `${secondsToDuration(breakTime*60)} remaining`
    }
    else {
      message = `${secondsToDuration(time*60)} remaining`
    }
    return message
  }
 
  //need to fix these return statements
  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {hoursToDuration(initialFocus)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                onClick = {handleFocusDecrease}
                className="btn btn-secondary"
                data-testid="decrease-focus"
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                onClick = {handleFocusIncrease}
                className="btn btn-secondary"
                data-testid="increase-focus"
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {hoursToDuration(initialBreak)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  onClick = {handleBreakDecrease}
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  onClick = {handleBreakIncrease}
                  className="btn btn-secondary"
                  data-testid="increase-break"
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
            <button
              type="button"
              onClick = {handleStop}
              className="btn btn-secondary"
              title="Stop the session"
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">{setMessage()}</h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {RemainingMessage()}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progressVal} // TODO: Increase aria-valuenow as elapsed time increases
                style={ {width: `${progressPercent}%`} } // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
