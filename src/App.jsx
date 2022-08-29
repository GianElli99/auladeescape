import { useState } from 'react'
import { Homepage } from './pages/Homepage'
import { Quiz } from './pages/Quiz'

function App() {
  const [playing, setPlaying] = useState(false)
  return <main>{playing ? <Quiz /> : <Homepage onStart={setPlaying} />}</main>
}

export default App
