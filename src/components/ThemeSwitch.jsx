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
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  },[isDark])

  function toggleTheme(){
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
    >
      
      {isDark ? (
        <SunIcon properties={"w-full p-1 cursor-pointer"} color={"#fff"} />
      ) :(
        <MoonIcon properties={"w-full p-1 cursor-pointer"} color={"#fff"} />) }
    </button>
  );
}