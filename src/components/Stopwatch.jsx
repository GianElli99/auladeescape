import { useEffect, useState } from 'react'
import React from 'react'

export const Stopwatch = ({ shouldStop, startedAt, finishedAt }) => {
  const [stopped, setStopped] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(finishedAt - startedAt || 0)

  if (shouldStop && !stopped) {
    setStopped(true)
  }

  useEffect(() => {
    const initialTime = startedAt || new Date()

    let stopwatchId
    if (!stopped) {
      stopwatchId = setInterval(() => {
        const currentTime = new Date()
        const msElapsed = new Date(currentTime - initialTime)
        setTimeElapsed(msElapsed)
      }, 1000)
    }

    return () => {
      clearInterval(stopwatchId)
    }
  }, [stopped, startedAt])
  const formatTimeElapsed = (timeElapsed) => {
    const seconds = Math.floor((timeElapsed / 1000) % 60)
    const minutes = Math.floor((timeElapsed / 1000 / 60) % 60)
    const hours = Math.floor((timeElapsed / 1000 / 60 / 60) % 60)

    const formattedTimeElapsed = `${hours < 10 ? '0' : ''}${hours}:${
      minutes < 10 ? '0' : ''
    }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

    return formattedTimeElapsed
  }

  return (
    <h2 className="text-center text-martinique-800 text-xl">
      {formatTimeElapsed(timeElapsed)}
    </h2>
  )
}
