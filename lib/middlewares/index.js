/* leopardo
Copyright(c) 2024 Alejandrocsdev
MIT Licensed */

'use strict'

/* Module dependencies. */

const path = require('path')
const fs = require('fs')
const querystring = require('querystring')
const url = require('url')

// Middleware class definition
class Middleware {
  // CORS middleware to handle Access-Control-Allow-Origin header
  cors(origin = '*') {
    return (request, response, next) => {
      response.setHeader('Access-Control-Allow-Origin', `${origin}`)
      next()
    }
  }

  // Static middleware to serve static files
  static(directory) {
    // Resolve the static file directory path
    const staticPath = path.resolve(__dirname, '..', '..', '..', '..', directory)
    const staticFiles = []
  
    // Function to recursively iterate through directories and files
    function iterateFiles(dirPath) {
      fs.readdir(dirPath, 'utf8', (err, items) => {
        if (err) {
          console.error(`Error: Fail to read directory ${directory} at ` + '\n' + `${dirPath}`)
          return
        }
  
        items.forEach((item) => {
          const itemPath = path.join(dirPath, item)
          fs.stat(itemPath, (err, stats) => {
            if (err) {
              console.error(`Error stating file ${itemPath}: ${err}`)
              return
            }
  
            if (stats.isFile()) {
              let relativePath = path.relative(staticPath, itemPath)
              relativePath = relativePath.split(path.sep).join('/')
              staticFiles.push('/' + relativePath)
            } else {
              iterateFiles(itemPath)
            }
          })
        })
      })
    }
  
    // Call the function to populate staticFiles array
    iterateFiles(staticPath)
  
    // Return middleware function to serve static files
    return (request, response, next) => {
      if (staticFiles.some((file) => file === request.url)) {
        const filePath = path.join(staticPath, request.url)
        const contentType = type(filePath)
        fs.readFile(filePath, 'utf8', (err, fileContent) => {
          if (err) {
            console.error(`Error reading file ${filePath}: ${err}`)
            response.writeHead(500, { 'Content-Type': 'text/plain' })
            response.end('Internal Server Error')
            return
          }
          response.setHeader('Content-Type', contentType)
          response.end(fileContent)
        })
      } else {
        next()
      }
    }
  }

  // Method Override middleware to support HTTP method overriding
  methodOverride() {
    return (request, response, next) => {
      const query = url.parse(request.url, true).query
      if (request.method === 'POST' && query && query._method) {
        request.method = query._method.toUpperCase()
      }
      next()
    }
  }

  // URL Encoded middleware to parse URL-encoded form data
  urlencoded() {
    return (request, response, next) => {
      if (request.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = ''
        request.on('data', (chunk) => (body += chunk.toString()))
        request.on('end', () => {
          const bodyData = querystring.parse(body)
          request.body = bodyData
          next()
        })
      } else {
        next()
      }
    }
  }
}

// Function to determine the content type based on file extension
function type(filePath) {
  const ext = path.extname(filePath)
  if (ext === '.html') {
    return 'text/html'
  } else if (ext === '.css') {
    return 'text/css'
  } else if (ext === '.js') {
    return 'application/javascript'
  } else if (ext === '.json') {
    return 'application/json'
  }
}

const middleware = new Middleware()
module.exports = middleware
