import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const getInitialState = () => {
  const currentStepRaw = window.localStorage.getItem('currentStep')
  const startedAtRaw = window.localStorage.getItem('startedAt')
  const finishedAtRaw = window.localStorage.getItem('finishedAt')

  if (isNaN(Number(currentStepRaw))) {
    return null
  }
  if (
    Number(startedAtRaw) === 0 ||
    isNaN(Date.parse(new Date(Number(startedAtRaw))))
  ) {
    return null
  }

  return {
    currentStep: Number(currentStepRaw),
    startedAt: new Date(Number(startedAtRaw)),
    finishedAt:
      Number(finishedAtRaw) === 0 ||
      isNaN(Date.parse(new Date(Number(finishedAtRaw))))
        ? undefined
        : new Date(Number(finishedAtRaw)),
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App resumeGameOptions={getInitialState()} />
)
