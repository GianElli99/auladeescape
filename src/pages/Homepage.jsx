import logoFull from '../assets/logo-full.svg'

export const Homepage = ({ onStart }) => {
  return (
    <div>
      <header>
        <img
          src={logoFull}
          alt="Aula de escape logo"
          height="320"
          width="320"
          className="mx-auto block h-80"
        />
      </header>
      <main className="flex flex-col items-center gap-4 font-lato text-xl text-center">
        <p>¡Hey! ¿Estas seguro que podrás salir?</p>
        <button
          onClick={() => onStart(true)}
          type="button"
          className="text-lg text-white bg-pizza hover:bg-pizza-600 focus:ring-4 focus:outline-none focus:ring-pizza-200 shadow-lg font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 "
        >
          Comenzar 💥
        </button>
      </main>
    </div>
  )
}
