
export default function UpdateProgressBar({progressVal, progressPercent, isTimerRunning, Paused}) {

    if(isTimerRunning || Paused) {
        return (
        <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progressVal}
              style={ {width: `${progressPercent}%`} }
            />
          </div>
        </div>
        </div>
        )
    }
    else {
        return null
    }
}