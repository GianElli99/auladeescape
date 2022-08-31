import { useState } from 'react'
import { Homepage } from './pages/Homepage'
import { Quiz } from './pages/Quiz'

function App({ resumeGameOptions }) {
  console.log(resumeGameOptions)
  const [playing, setPlaying] = useState(resumeGameOptions ? true : false)
  return (
    <main>
      {playing ? (
        <Quiz resumeGameOptions={resumeGameOptions} />
      ) : (
        <Homepage
          onStart={() => {
            window.localStorage.setItem('startedAt', new Date().getTime())
            window.localStorage.setItem('currentStep', 0)

            setPlaying(true)
          }}
        />
      )}
    </main>
  )
}

export default App
