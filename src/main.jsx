import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LangContextProvider from './context/LangContextProvider.jsx'
import './styles/Globals.css'

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </StrictMode>,
)
