/* leopardo
Copyright(c) 2024 Alejandrocsdev
MIT Licensed */

'use strict'

/* Module dependencies. */

const url = require('url')
const identifier = require('../utilities/identifier')
const extendRequest = require('../request')

// Create a new Map to store routes
const routes = new Map()

// Function to add a route to the routes Map
function addRoute(path, handler, method) {
  // By giving unique id, avoid mismatches with only path or methods
  const id = identifier.id()
  routes.set(id, { path, handler, method })
}

// Router class to manage routes
class Router {
  constructor() {
    this.middlewares = []
  }

  // Add a GET route
  get(path, handler) {
    addRoute(path, handler, 'GET')
  }
  // Add a POST route
  post(path, handler) {
    addRoute(path, handler, 'POST')
  }
  // Add a PUT route
  put(path, handler) {
    addRoute(path, handler, 'PUT')
  }
  // Add a PATCH route
  patch(path, handler) {
    addRoute(path, handler, 'PATCH')
  }
  // Add a DELETE route
  delete(path, handler) {
    addRoute(path, handler, 'DELETE')
  }

  // Add a middleware
  use(middleware) {
    if (typeof middleware === 'function') {
      this.middlewares.push(middleware)
    }
  }

  // Request listener for processing incoming requests
  listener(request, response) {
    const path = url.parse(request.url).pathname
    let middlewareIndex = 0

    // Function to process middlewares
    const processMiddlewares = () => {
      if (middlewareIndex < this.middlewares.length) {
        this.middlewares[middlewareIndex](request, response, next)
      } else {
        processRoutes()
      }
    }

    // Function to move to the next middleware
    const next = () => {
      middlewareIndex++
      processMiddlewares()
    }

    // Function to process routes
    const processRoutes = () => {
      for (const [id, route] of routes) {
        // Store the original route path to revert changes if needed
        const originalPath = route.path

        // Add custom request methods to the request object
        extendRequest(request, route)

        // Check if the request path & method match the route
        if (path === route.path && request.method === route.method) {
          // Revert the route path to its original value to prevent issues with parameter ids
          route.path = originalPath

          // If there is a match, handle the request using the route's handler
          route.handler(request, response)
          return
        }
      }
    }

    // Start processing middlewares
    processMiddlewares()
  }
}

// Create a new instance of the Router class and export it
const router = new Router()
module.exports = router
