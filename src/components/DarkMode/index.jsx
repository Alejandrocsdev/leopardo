import { createContext, useContext, useState } from 'react'

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark((prevMode) => !prevMode)
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}
