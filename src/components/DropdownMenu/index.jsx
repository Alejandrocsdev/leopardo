import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// import { Anchor } from 'antd'
// const { Link } = Anchor

import Styles from './style.module.css'

function DropdownMenu({ items, text, showArrow = true, titleLink }) {
  // dropdown
  const [isOpen, setIsOpen] = useState(false)

  // redirect
  const navigate = useNavigate()

  const titleActions = (showArrow) => {
    if (showArrow) {
      setIsOpen(true)
    }
    navigate(`/doc${titleLink}`)
    window.scrollTo(0, 0)
  }

  const arrowActions = () => {
    setIsOpen(!isOpen)
  }

  const itemActions = (item) => {
    navigate(`/doc${titleLink}`)
    window.location.href = item.link
  }

  const arrow = showArrow && (
    <div onClick={arrowActions} className={Styles.button}>
      <FontAwesomeIcon
        icon={faChevronRight}
        className={`${Styles.arrow} ${isOpen ? Styles.rotated : ''}`}
      />
    </div>
  )

  return (
    <li className={Styles.li}>
      <div className={Styles.title}>
        <div onClick={() => titleActions(showArrow)} className={Styles.titleText}>
          {text}
        </div>
        {arrow}
      </div>
      {isOpen && (
        <div className={Styles.content}>
          {items.map((item, index) => (
            <div
              onClick={() => itemActions(item)}
              key={index}
              className={Styles.item}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </li>
  )
}

export default DropdownMenu
