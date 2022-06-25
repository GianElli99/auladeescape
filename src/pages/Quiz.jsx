import { Question } from '../components/Question'
import logoFull from '../favicon.svg'
import questions from '../data/questions'
import { useState } from 'react'

export const Quiz = () => {
  const [step, setStep] = useState(0)
  const hasWon = step === questions.length

  const handleNextStep = () => {
    const nextStepIndex = step + 1
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
      {hasWon ? (
        <div>Won</div>
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
