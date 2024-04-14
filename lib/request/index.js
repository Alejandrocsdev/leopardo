/* leopardo
Copyright(c) 2024 Alejandrocsdev
MIT Licensed */

'use strict'

/* Module dependencies. */

const url = require('url')

// Function to extend request object with params and query
function extendRequest(request, route) {
  requestParams(request, route)
  requestQuery(request)
}

// Function to extract parameters from the request URL based on the route
function requestParams(request, route) {
  // Parse the request URL to extract the path
  const path = url.parse(request.url).pathname
  request.params = {}
  const matches = []

  // Split the request path and route path into segments
  const pathSegments = path.split('/')
  const routeSegments = route.path.split('/')

  // Skip this route if the number of segments doesn't match
  if (routeSegments.length !== pathSegments.length) {
    matches.push(false)
  } else {
    // Iterate over each segment of the route path
    for (let i = 0; i < routeSegments.length; i++) {
      // Check if the segment is a parameter (starts with ':')
      // and if the corresponding segment in the path is a number
      if (routeSegments[i].startsWith(':') && !isNaN(pathSegments[i])) {
        const paramName = routeSegments[i].substring(1)
        request.params[paramName] = pathSegments[i]
        matches.push(true)
        continue
      }
      // If the segments don't match, skip this route
      if (routeSegments[i] !== pathSegments[i]) {
        matches.push(false)
      }
    }
  }

  // If all segments match, update route.path to match path
  if (matches.every((match) => match === true)) {
    route.path = path
  }
}

// Function to extract query parameters from the request URL
function requestQuery(request) {
  request.query = {}
  const parseUrl = url.parse(request.url)
  if (parseUrl.query) {
    // Split the query string into individual parameters
    const queryParams = parseUrl.query.split('&')

    // Iterate over each parameter and add it to the request query object
    for (const param of queryParams) {
      const [key, value] = param.split('=')
      request.query[key] = value
    }
  }
}

module.exports = extendRequest
