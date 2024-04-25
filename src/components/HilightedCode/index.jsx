import { useState } from 'react'

import { useDarkMode } from '../DarkMode'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'

import Styles from './style.module.css'

function HilightedCode({ codeString }) {
  // toggle dark mode
  const { isDark, toggleDarkMode } = useDarkMode()

  const [copy, setCopy] = useState(false)

  return (
    <>
      <div className={Styles.container}>
        <div className={`${Styles.header} ${isDark ? Styles.dark : Styles.light}`}>
          {copy ? (
            <div className={Styles.copyBtn}>
              <FontAwesomeIcon icon={faCheck} className={Styles.copyIcon} />
              Copied!
            </div>
          ) : (
            <div
              className={Styles.copyBtn}
              onClick={() => {
                navigator.clipboard.writeText(codeString)
                setCopy(true)
                setTimeout(() => {
                  setCopy(false)
                }, 3000)
              }}
            >
              <FontAwesomeIcon icon={faClipboard} className={Styles.copyIcon} />
              Copy
            </div>
          )}
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={isDark ? atomOneDark : atomOneLight}
          customStyle={{
            padding: '16px',
            fontSize: '16px',
            lineHeight: '1.4',
            margin: '0',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px'
          }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  )
}

export default HilightedCode
