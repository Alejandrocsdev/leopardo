/* leopardo
Copyright(c) 2024 Alejandrocsdev
MIT Licensed */

'use strict'

let counter = 0

const identifier = {
  // Generate a unique identifier
  id: () => {
    counter++
    return String(counter)
  }
}

module.exports = identifier
