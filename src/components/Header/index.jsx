import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun as dark, faUpRightFromSquare as link } from '@fortawesome/free-solid-svg-icons'
import { faSun as light } from '@fortawesome/free-regular-svg-icons'
import Logo from '../Logo'
import Styles from './style.module.css'
const lightIcon = <FontAwesomeIcon icon={light} className={Styles.mode} />
const darkIcon = <FontAwesomeIcon icon={dark} className={Styles.mode} />

function Header() {
  const [isLightMode, setIsLightMode] = useState(true)

  function handleLightToggle() {
    setIsLightMode((prevMode) => !prevMode)
  }
  return (
    <>
      <header className={Styles.header}>
        <a href="https://alejandrocsdev.github.io/leopardo" className={Styles.logoHome}>
          Leopardo
        </a>
        <nav className={Styles.nav}>
          <a href="https://github.com/Alejandrocsdev/leopardo" target="_blank">
            GitHub
            <FontAwesomeIcon icon={link} />
          </a>
          <a href="https://www.npmjs.com/package/leopardo" target="_blank">
            npm
            <FontAwesomeIcon icon={link} />
          </a>
          <div onClick={handleLightToggle}>{isLightMode ? lightIcon : darkIcon}</div>
        </nav>
      </header>
    </>
  )
}

export default Header
