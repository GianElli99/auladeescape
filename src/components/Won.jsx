import { useRef, useEffect } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
}

export const Won = () => {
  const refAnimationInstance = useRef(null)

  const getInstance = (instance) => {
    refAnimationInstance.current = instance
  }

  useEffect(() => {
    const makeShot = (particleRatio, opts) => {
      refAnimationInstance.current &&
        refAnimationInstance.current({
          ...opts,
          origin: { y: 0.7 },
          particleCount: Math.floor(200 * particleRatio),
        })
    }

    const fire = () => {
      makeShot(0.25, {
        spread: 26,
        startVelocity: 55,
      })

      makeShot(0.2, {
        spread: 60,
      })

      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      })

      makeShot(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      })

      makeShot(0.1, {
        spread: 120,
        startVelocity: 45,
      })
    }
    fire()
  }, [])

  return (
    <div className="pt-3 w-full max-w-md mx-auto px-2 mb-1">
      <h1 className="text-center text-xl">
        🎉 ¡Felicitaciones! Lograron salir del Aula de Escape 🎉
      </h1>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <a
        href="./"
        className="mt-10 text-sm block underline underline-offset-2 text-martinique-600 text-right"
      >
        Volver al inicio
      </a>
    </div>
  )
}
