import React, {useState, useRef, useEffect} from 'react'
import OffButton from '../components/OffButton'
import OnButton from '../components/OnButton'
import OffList from '../components/OffList'
import OnList from '../components/OnList'
import OffListItem from '../components/OffListItem'
import OnListItem from '../components/OnListItem'



function TimeContainer() {
  const [timer, setTimer] = useState(0)
  const [active, setActive] = useState(false)

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
}, [active]);
  
  


  const formatTime = () => {
   const minutes = ("0" + Math.floor((timer / 60000) % 60)).slice(-2)
   const seconds = ("0" + Math.floor((timer / 1000) % 60)).slice(-2)
   const milliSeconds = ("0" + ((timer / 10) % 100)).slice(-2)

   return `${minutes}:${seconds}:${milliSeconds}`
  }

  return (
    <div className="stopwatch">
      <div className="numbers">
        <h1>{formatTime()}</h1>
      </div>
      <div className="buttons">
        {/* <button onClick={() => setActive(true)}>Start</button> */}
        <OnButton setActive ={setActive}/>
        <button onClick={() => setActive(false)}>Stop</button>
        <button onClick={() => setTimer(0)}>Reset</button>       
      </div>
    </div>
  );
}

export default TimeContainer;