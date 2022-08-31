import { useEffect, useState } from 'react'
import React from 'react'

export const Stopwatch = ({ shouldStop }) => {
  const [stopped, setStopped] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState('00:00:00')

  if (shouldStop && !stopped) {
    setStopped(true)
  }

  useEffect(() => {
    const initialTime = new Date()

    let stopwatchId
    if (!stopped) {
      stopwatchId = setInterval(() => {
        const currentTime = new Date()
        const msElapsed = new Date(currentTime - initialTime)

        const seconds = Math.floor((msElapsed / 1000) % 60)
        const minutes = Math.floor((msElapsed / 1000 / 60) % 60)
        const hours = Math.floor((msElapsed / 1000 / 60 / 60) % 60)

        const formattedTimeElapsed = `${hours < 10 ? '0' : ''}${hours}:${
          minutes < 10 ? '0' : ''
        }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

        setTimeElapsed(formattedTimeElapsed)
      }, 1000)
    }

    return () => {
      clearInterval(stopwatchId)
    }
  }, [stopped])

  return (
    <h2 className="text-center text-martinique-800 text-xl">{timeElapsed}</h2>
  )
}
