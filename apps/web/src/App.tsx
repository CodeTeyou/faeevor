import { useState } from "react";


function NavLinks() {
  return (
    <>
      <a href="/">Home</a>
      <a href="/Friends">Friends</a>
      <a href="/Faeevors">Faeevors</a>
    </>
  )
}



export function Header () {
  const [openState, setOpenState] = useState(() => localStorage.getItem("headerOpen") === "true")

  return (
    <>
    <header  className={`bg-white/45 outline-1 rounded-4xl p-2 absolute z-20 top-2 left-2 items-center transition-[width] delay-75 duration-150 ease-in-out flex flex-row overflow-hidden h-12 backdrop-blur-lg ${openState ? "w-[calc(100vw-1rem)]" : "w-12"} `} >
      <button className="flex items-center p-0 m-0 shrink-0" onClick={() => {localStorage.setItem("headerOpen", JSON.stringify(!openState)); setOpenState(!openState)}}>
        <img src="/logo.svg" alt="logo" className="w-8"/>
      </button>
      <div className={`transition-[width, opacity] ${openState ? "w-full opacity-100" : "w-0 opacity-5"} flex flex-row justify-between items-center `}>
        <strong className="pl-2 text-3xl font-bold text-center">Faeevor</strong>
        <nav className="flex flex-row justify-around items-center w-2/5 h-12">
        <NavLinks />
        </nav>
      </div>
    </header>
    </>
  )
}