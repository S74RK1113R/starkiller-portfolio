import { useLang } from "../context/LangContextProvider";
import { Spanishflag, UnitedKingdom } from "../icons/Icons";

export default function LangSwitcher() {
    const {lang, setLang} = useLang();
    function toggleLang(){
        setLang(!lang);
    }

  return (
    <button
      onClick={toggleLang}
      aria-label="Cambiar lenguaje"
      className="bg-gray-100/10 w-10 h-10 mr-2 rounded-full flex items-center justify-center border-2 border-black dark:border-white dark:bg-gray-900/10"
    >
    {lang ? <Spanishflag className="size-6 hover:size-6.5"/> : <UnitedKingdom className="size-6 hover:size-7"/>} 
    </button>
  );
}