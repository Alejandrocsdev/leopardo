import { createContext, useContext, useState, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {

  // local storage initial value
  const [isDark, setIsDark] = useLocalStorage('isDark', false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    // preference initial value
    setIsDark(mediaQuery.matches)
    
    const handleChange = (e) => {
      setIsDark(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

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
