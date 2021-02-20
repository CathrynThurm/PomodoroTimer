import hoursToDuration from 
"../utils/duration/index.js"


export default function BreakDuration({initialBreak}) {

    return `Break Duration: ${hoursToDuration(initialBreak)}`
}


export function FocusDuration({initialFocus}) {

    return `Focus Duration: ${hoursToDuration(initialFocus)}`
}