export function Header () {
  return (
    <>
    <header className="bg-white outline-2 rounded-4xl flex flex-row p-2" >
      <img src="../../public/logo.svg" alt="logo" className="w-10"/>
    </header>
    </>
  )
}

export function HomePage() {
  return (
    <>
    <div className="bg-purple-300 justify-center w-screen h-[50vh] position absolute rounded-b-full flex items-center" >
      <div>
        <h1>Faeevor</h1>
        <h2>ask in one click</h2>
        <button>Lets Go!</button>
      </div>
    </div>
    </>
  );
}