import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Styles from './style.module.css'

function DropdownMenu({ items, text, showArrow = true }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleItemClick = (item) => {
    navigate(`/doc${item.link}`)
    setIsOpen(false)
  }

  const arrow = showArrow && (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={`${Styles.arrow} ${isOpen ? Styles.rotated : ''}`}
    />
  )

  return (
    <li className={Styles.li}>
      <div className={Styles.title}>
        <div>{text}</div>
        <div onClick={toggleDropdown} className={Styles.button}>
          {arrow}
        </div>
      </div>
      {isOpen && (
        <div className={Styles.content}>
          {items.map((item, index) => (
            <div key={index} onClick={() => handleItemClick(item)} className={Styles.item}>
              {item.text}
            </div>
          ))}
        </div>
      )}
    </li>
  )
}

export default DropdownMenu
