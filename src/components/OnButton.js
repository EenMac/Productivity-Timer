import React from 'react'
import handleStart from "../container/timeContainer"

function OnButton({handleGo}) {

  return (
    <button onclick={handleGo}>Go</button>
  )
}

export default OnButton