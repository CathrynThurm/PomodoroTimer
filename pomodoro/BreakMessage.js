import hoursToDuration, {secondsToDuration} from 
"../utils/duration/index.js"

export default function SetMessage({time, breakTime, initialBreak, initialFocus, paused}) {
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