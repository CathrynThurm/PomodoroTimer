import hoursToDuration, {secondsToDuration} from 
"../utils/duration/index.js"


export default function FocusDuration({initialFocus}) {

    return `Focus Duration: ${hoursToDuration(initialFocus)}`
}

export function BreakDuration({initialBreak}) {

    return `Break Duration: ${hoursToDuration(initialBreak)}`
}