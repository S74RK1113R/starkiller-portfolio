import { createContext, useContext,useEffect,useState } from "react"

const LangContext = createContext(null);

export default function LangContextProvider({children}) {
    const [lang,setLang] = useState(localStorage.getItem("lang") === "true");

    useEffect(()=>{
        if(lang){
            localStorage.setItem("lang","true")
            return
        }
        localStorage.setItem("lang","false")
    },[lang])

    return(
        <LangContext.Provider value={{lang, setLang}}>
            {children}
        </LangContext.Provider>
    )
}

export const useLang = () => useContext(LangContext);