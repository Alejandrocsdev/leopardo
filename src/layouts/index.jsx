import { useDarkMode } from '../components/DarkMode'

import Header from '../components/Header'
import Styles from './style.module.css'

function Layout({ children }) {

  // toggle dark mode
  const { isDark, toggleDarkMode } = useDarkMode()
  
  return (
    <>
      <Header />
      <main className={Styles.main} data-theme={isDark ? 'dark' : 'light'}>
        {children}
      </main>
    </>
  )
}

export default Layout
