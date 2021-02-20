
export default function PlayPause({playPause, isTimerRunning, classNames}) {

    return (
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
    </div>
    )
}

export function StopSession({handleStop, isTimerRunning, paused}) {

    if(isTimerRunning || paused) {
        return (
            <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
            >
            <button
            type="button"
            disabled={false}
            onClick = {handleStop}
            className="btn btn-secondary"
            title="Stop the session"
            >
            <span className="oi oi-media-stop" />
            </button>
            </div>
        )
    }
    else {
        return (
            <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
            >
            <button
            type="button"
            disabled={true}
            onClick = {handleStop}
            className="btn btn-secondary"
            title="Stop the session"
            >
            <span className="oi oi-media-stop" />
            </button>
            </div>
        )
    }
}