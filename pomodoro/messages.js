import hoursToDuration, {secondsToDuration} from 
"../utils/duration/index.js"

function RemainingMessage({time, breakTime}){
    let message = ""

    if(time === 0 && breakTime !== 0) {
    message = `${secondsToDuration(breakTime*60)} remaining`
    }
    else {
    message = `${secondsToDuration(time*60)} remaining`
    }
    return message
}


function SetMessage({time, breakTime, initialBreak, initialFocus, paused}) {
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

    
export default function FormatMessages( { time, breakTime, initialBreak, initialFocus, paused, isTimerRunning } ) {

    if(isTimerRunning || paused) {
    return (
    <div className="row mb-2">
    <div className="col">
        <h2 data-testid="session-title">
            <SetMessage time={time} breakTime={breakTime} initialBreak={initialBreak} initialFocus={initialFocus} paused ={paused}/>
        </h2>
        <p className="lead" data-testid="session-sub-title">
        <RemainingMessage time={time} breakTime={breakTime} />
    </p>
    </div>
    </div>
)}
else {
    return null
}
}
