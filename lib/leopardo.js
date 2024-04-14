/* leopardo
Copyright(c) 2024 Alejandrocsdev
MIT Licensed */

'use strict'

/* Module dependencies. */

const http = require('http')
const router = require('./routes')
const extendResponse = require('./response')

// Main function for creating the leopardo framework
function leopardo() {
  // Destructuring functions from router methods
  const { get, post, put, patch, delete: del } = router

  // Function to start the HTTP server
  function listen(port, host, callback) {
    try {
      // Create a new HTTP server instance
      const server = http.createServer()

      // Request listener to handle incoming requests
      server.on('request', (request, response) => {
        // Add custom response methods to the response object
        extendResponse(response)

        // Call the request listener from the router to handle the request
        router.listener(request, response)
      })

      // If host is a function, assume it's the callback and set default host
      if (typeof host === 'function') {
        callback = host
        host = 'localhost'
      }

      // Start listening on the specified port and host
      server.listen(port, host, callback)
    } catch (error) {
      console.error('Failed to start server:', error)
    }
  }

  // Return an object with HTTP methods and middleware functions
  return {
    get,
    post,
    put,
    patch,
    delete: del,
    listen
  }
}

module.exports = leopardo
