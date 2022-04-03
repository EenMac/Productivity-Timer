import React from 'react'
import handleStart from "../container/timeContainer"

function OnButton({setActive}) {

  return (
    <button onclick={() => {setActive(true)}}>Go</button>
  )
}

export default OnButton