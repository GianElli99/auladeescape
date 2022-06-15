import logoFull from './assets/logo-full.svg'

function App() {
  return (
    <>
      <header>
        <img
          src={logoFull}
          alt="Aula de escape logo"
          height="300"
          width="300"
          className="mx-auto my-10 block"
        />
      </header>
      <main className="flex flex-col items-center gap-4 font-lato text-2xl text-center">
        <p>¡Hey! ¿Estas seguro que podrás salir?</p>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 "
        >
          Comenzar 💥
        </button>
      </main>
    </>
  )
}

export default App
