import BreakDuration, {FocusDuration} from "./GetTimerDuration";


export default function IIncrementFocus({initialFocus, handleFocusDecrease, handleFocusIncrease}) {
  
  return (
    <div className="col">
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/* TODO: Update this text to display the current focus session duration */}
        <FocusDuration initialFocus={initialFocus}/>
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
  </div>)
}

export function IncrementBreak({initialBreak, handleBreakDecrease, handleBreakIncrease}) {


  return (  
  <div className="col">
    <div className="float-right">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-break">
          {/* TODO: Update this text to display the current break session duration */}
          <BreakDuration initialBreak={initialBreak} />
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
  </div>)
}