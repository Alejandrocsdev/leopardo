/* leopardo
Copyright(c) 2024 Alejandrocsdev
MIT Licensed */

'use strict'

// Function to extend the response object with additional methods
function extendResponse(response) {

  // Method to send a response with the given data and end the response
  response.send = function (data) {
    response.end(data)
  }

  // Method to redirect the response to the specified path
  response.redirect = function (path) {
    response.writeHead(302, { Location: path })
    response.end()
  }

  // Method to set the Content-Type header based on the provided type
  response.type = function (type) {
    let contentType
    if (type === 'html') {
      contentType = 'text/html'
    } else if (type === 'js') {
      contentType = 'application/javascript'
    } else if (type === 'json') {
      contentType = 'application/json'
    }
    response.setHeader('Content-Type', contentType)
  }
}

module.exports = extendResponse
