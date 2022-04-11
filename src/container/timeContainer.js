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
  
  const handleReset = () => {
    setTimer(0);
    setLap([]);
  }

  // add lap to Lap state
  const handleLap = () => {
    setLap((lap)=> [...lap, [timer]]);
    setTimer(0);
  }
  
  // const lapTime = (lap) => {
  //   return lap[-1];
  // }



  const formatTime = () => {
   const minutes = ("0" + Math.floor((timer / 60000) % 60)).slice(-2)
   const seconds = ("0" + Math.floor((timer / 1000) % 60)).slice(-2)
   const milliSeconds = ("0" + ((timer / 10) % 100)).slice(-2)

   return `${minutes}:${seconds}:${milliSeconds}`
  }

  const lapInterval = () => {
    const {length, [length - 2]: secondLast, [length -1]: last} = lap;
    if(!last) return formatTime(timer)
    return formatTime(timer-last.timer)
  }
  
  return (
    <div className="stopwatch">
      <div className="numbers">
        <h1 id="timer">{formatTime()}</h1>
      </div>
      <div className="buttons">
        <button onClick={() => handleStart()}>Start</button>
        <button onClick={() => handleStop()}>Stop</button>
        <button onClick={() => handleReset()}>Reset</button>
        <button onClick={handleLap}>Lap</button>       
      </div>
      <div>
        {lap.map((array, index) => {
          const lapTime = () => {
            const minutes = ("0" + Math.floor((array / 60000) % 60)).slice(-2)
            const seconds = ("0" + Math.floor((array / 1000) % 60)).slice(-2)
            const milliSeconds = ("0" + ((array / 10) % 100)).slice(-2)
         
            return `${minutes}:${seconds}:${milliSeconds}`
          }
          return(
            <div>
              <ul>
                <li key={index.valueOf}>
                  {lapTime()}
                </li>
              </ul>
            </div>
          )
        }) }
      </div>
    </div>
  );
}

export default TimeContainer;