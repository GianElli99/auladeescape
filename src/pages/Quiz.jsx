import { Question } from '../components/Question'
import logoFull from '../favicon.svg'
import questions from '../data/questions'
import { useState } from 'react'
import { Won } from '../components/Won'
import { Stopwatch } from '../components/Stopwatch'

export const Quiz = ({ resumeGameOptions }) => {
  const [step, setStep] = useState(resumeGameOptions?.currentStep || 0)
  const hasWon = step === questions.length

  const handleNextStep = () => {
    const nextStepIndex = step + 1
    window.localStorage.setItem('currentStep', nextStepIndex)
    if (nextStepIndex === questions.length) {
      window.localStorage.setItem('finishedAt', new Date().getTime())
    }
    if (nextStepIndex > questions.length) {
      return
    }
    setStep(nextStepIndex)
  }
  return (
    <>
      <header className="py-6">
        <img
          src={logoFull}
          alt="Aula de escape logo"
          height="160"
          width="160"
          className="mx-auto block h-40"
        />
      </header>
      <Stopwatch
        startedAt={resumeGameOptions?.startedAt}
        finishedAt={resumeGameOptions?.finishedAt}
        shouldStop={hasWon}
      />
      {hasWon ? (
        <Won />
      ) : (
        <Question
          key={step}
          questionData={questions[step]}
          onCorrectAnswer={handleNextStep}
        />
      )}
    </>
  )
}
