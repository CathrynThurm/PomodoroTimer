const alarm = new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`)

 function PlaySound (sound) {
        sound.play()
  }

  function PauseSound (sound) {
      sound.pause()
  }

  export default function ShouldPlaySound(time, breakTime, initialBreak) {
      if(time === 0 && breakTime === initialBreak) {
            PlaySound(alarm)
      }
      else if(breakTime <= 0) {
          PlaySound(alarm)
          //setTimeout(PlayPauseSound(alarm, false), 2000)
      }
      else {
          PauseSound(alarm)
      }
    
  }