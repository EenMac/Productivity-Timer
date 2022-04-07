import React, {useState, useRef, useEffect} from 'react'
import OffButton from '../components/OffButton'
import OnButton from '../components/OnButton'
import OffList from '../components/OffList'
import OnList from '../components/OnList'
import OffListItem from '../components/OffListItem'
import OnListItem from '../components/OnListItem'
import { renderIntoDocument } from 'react-dom/test-utils'



function TimeContainer() {
  const [timer, setTimer] = useState(0)
  const [active, setActive] = useState(false)
  const [pause, setPause] = useState(false)
  const [lap, setLap] = useState([])

  useEffect(() => {
  let interval;
  if(active) {
    interval = setInterval(() => {
      setTimer((timer) => timer + 10)
    }, 10);
  } else if(!active){
    clearInterval(interval)
  }
  return () => clearInterval(interval);
}, [active])
  
  const handleStart = () => {
    setActive(true)
  }

  const handleStop = () => {
    setActive(false)
  }

  const handleLap = () => {
    setLap((lap)=> [...lap, {timer}]);
  }


  const formatTime = () => {
   const minutes = ("0" + Math.floor((timer / 60000) % 60)).slice(-2)
   const seconds = ("0" + Math.floor((timer / 1000) % 60)).slice(-2)
   const milliSeconds = ("0" + ((timer / 10) % 100)).slice(-2)

   return `${minutes}:${seconds}:${milliSeconds}`
  }

  function laps(formatTime){
    document.getElementById("list-items").innerHTML = formatTime
  }

  const handleLaps = (time) => {
    let lap = document.getElementById("timer").text
  }

  
  return (
    <div className="stopwatch">
      <div className="numbers">
        <h1 id="timer">{formatTime()}</h1>
      </div>
      <div className="buttons">
        <button onClick={() => handleStart()}>Start</button>
        <button onClick={() => handleStop()}>Stop</button>
        <button onClick={() => setTimer(0)}>Reset</button>
        <button onClick={handleLaps}>Lap</button>       
      </div>
      <div>
        <ul>
          <li>
            <p id="list-items">{formatTime()}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TimeContainer;