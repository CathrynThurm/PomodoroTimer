import {secondsToDuration} from 
"../utils/duration/index.js"

export default function RemainingMessage({time, breakTime}){
    let message = ""

    if(time === 0 && breakTime !== 0) {
    message = `${secondsToDuration(breakTime*60)} remaining`
    }
    else {
    message = `${secondsToDuration(time*60)} remaining`
    }
    return message
}