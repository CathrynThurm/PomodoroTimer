import hoursToDuration, {secondsToDuration} from 
"../utils/duration/index.js"


export default function BreakDuration({initialBreak}) {

    return `Break Duration: ${hoursToDuration(initialBreak)}`
}