import { useEffect, useState } from "react";
import SunIcon, { MoonIcon } from "../icons/Icons";


export default function ThemeSwitcher() {
  
  const [isDark,setIsDark] = useState(
    localStorage.getItem('theme') === 'dark'
  )

  useEffect(()=>{
    if(isDark){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
      return
    }
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme','light')
    
  },[isDark])

  function toggleTheme(){
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center border-2 border-black dark:border-white dark:bg-gray-900"
    >
      
      {isDark ? (
        <SunIcon properties={"w-full p-1 fill-current text-gray-950 cursor-pointer dark:text-gray-50"}/>
      ) :(
        <MoonIcon properties={"w-full p-1 fill-current text-gray-950 cursor-pointer dark:text-gray-50"} />) }
    </button>
  );
}