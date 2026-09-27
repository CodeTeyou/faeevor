import { useState } from "react";

export function Header () {
  const [openState, setOpenState] = useState(false)

  return (
    <>
    <header id="header" className={`bg-white/45 outline-1 rounded-4xl p-2 absolute z-20 top-2 left-2 items-center transition-all duration-150 ${openState ? "w-screen" : "w-auto"} `} >
      <button className="p-0 m-0 flex align-center" onClick={() => {setOpenState(!openState)}}>
        <img src="/logo.svg" alt="logo" className="w-8"/>
      </button>
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