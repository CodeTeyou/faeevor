import { useState } from "react";

export function Header () {
  const [openState, setOpenState] = useState(false)

  return (
    <>
    <header  className={`bg-white/45 outline-1 rounded-4xl p-2 absolute z-20 top-2 left-2 items-center transition-all delay-75 duration-150 ease-in-out ${openState ? "w-[98%]" : "w-12"} `} >
      <button className="p-0 m-0 flex items-center" onClick={() => {setOpenState(!openState)}}>
        <img src="/logo.svg" alt="logo" className="w-8"/>
      </button>
    </header>
    </>
  )
}

