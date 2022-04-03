import React from 'react'
import handleStart from "../container/timeContainer"

function OnButton({handleStart, timer, pause, increment, active}) {
  return (
    <button onclick={handleStart}>OnButton</button>
  )
}

export default OnButton