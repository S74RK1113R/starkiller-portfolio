import { createContext, useContext, useState } from "react"

const LangContext = createContext(null);

export default function LangContextProvider({children}) {
    const [lang,setLang] = useState(true);

    return(
        <LangContext.Provider value={{lang, setLang}}>
            {children}
        </LangContext.Provider>
    )
}

export const useLang = () => useContext(LangContext);