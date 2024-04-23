import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun as dark, faUpRightFromSquare as link } from '@fortawesome/free-solid-svg-icons'
import { faSun as light } from '@fortawesome/free-regular-svg-icons'

import Styles from './style.module.css'

const linkIcon = <FontAwesomeIcon icon={link} />
const lightIcon = <FontAwesomeIcon icon={light} />
const darkIcon = <FontAwesomeIcon icon={dark} />

function Header() {
  // light mode
  const [isLightMode, setIsLightMode] = useState(true)

  function handleLightToggle() {
    setIsLightMode((prevMode) => !prevMode)
  }

  // redirect
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <>
      <header className={Styles.header}>
        <img onClick={handleClick} className={Styles.logo} src="https://github.com/Alejandrocsdev/leopardo/tree/doc/public/logo-home.png" />
        <nav className={Styles.nav}>
          <a href="https://github.com/Alejandrocsdev/leopardo" target="_blank">
            GitHub&nbsp;{linkIcon}
          </a>
          <a href="https://www.npmjs.com/package/leopardo" target="_blank">
            npm&nbsp;{linkIcon}
          </a>
          <div className={Styles.mode} onClick={handleLightToggle}>
            {isLightMode ? lightIcon : darkIcon}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
