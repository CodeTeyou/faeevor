import { useState } from "react";


function NavLinks() {
  return (
    <>
      <a href="/">Home</a>
    </>
  )
}



export function Header () {
  const [openState, setOpenState] = useState(() => localStorage.getItem("headerOpen") === "true")

  return (
    <>
    <header  className={`bg-white/45 outline-1 rounded-4xl p-2 absolute z-20 top-2 left-2 items-center transition-[width] delay-75 duration-150 ease-in-out flex flex-row overflow-hidden h-12 backdrop-blur-2xl ${openState ? "w-[calc(100vw-1rem)]" : "w-12"} `} >
      <button className="p-0 m-0 flex items-center shrink-0" onClick={() => {localStorage.setItem("headerOpen", JSON.stringify(!openState)); setOpenState(!openState)}}>
        <img src="/logo.svg" alt="logo" className="w-8"/>
      </button>
      <div className={`transition-[width, opacity] ${openState ? "w-full opacity-100" : " w-0 opacity-5"} flex flex-row justify-between items-center `}>
        <strong className="font-bold text-3xl pl-2 text-center">Faeevor</strong>
        <nav className="items-center flex flex-row justify-around w-1/3 h-12">
        <NavLinks />
        </nav>
      </div>
    </header>
    </>
  )
}