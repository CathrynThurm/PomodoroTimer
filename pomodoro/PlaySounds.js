export default function ShouldPlaySound(time, breakTime, initialBreak) {
      if(time === 0 && breakTime === initialBreak) {
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play()
      }
      else if(breakTime <= 0) {
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play()
      }
      else {
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).pause()
      }
    
  }