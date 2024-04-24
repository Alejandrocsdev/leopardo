import { useNavigate } from 'react-router-dom'
import { useDarkMode } from '../DarkMode'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faUpRightFromSquare as link } from '@fortawesome/free-solid-svg-icons'

import Styles from './style.module.css'

// variables
const linkIcon = <FontAwesomeIcon icon={link} />
const sunIcon = <FontAwesomeIcon icon={faSun} />
const moonIcon = <FontAwesomeIcon icon={faMoon} className={Styles.moon} />
const blackLogo = 'https://alejandrocsdev.github.io/leopardo/logo-home-black.png'
const whiteLogo = 'https://alejandrocsdev.github.io/leopardo/logo-home-white.png'

function Header() {
  // toggle dark mode
  const { isDark, toggleDarkMode } = useDarkMode()

  // redirect
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <>
      <header className={Styles.header} data-theme={isDark ? 'dark' : 'light'}>
        <img onClick={handleClick} className={Styles.logo} src={isDark ? whiteLogo : blackLogo} />
        <nav className={Styles.nav}>
          <a href="https://github.com/Alejandrocsdev/leopardo" target="_blank">
            GitHub&nbsp;{linkIcon}
          </a>
          <a href="https://www.npmjs.com/package/leopardo" target="_blank">
            npm&nbsp;{linkIcon}
          </a>
          <div className={Styles.mode} onClick={toggleDarkMode}>
            {isDark ? moonIcon : sunIcon}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
