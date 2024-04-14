[![Leopardo Logo](https://github.com/Alejandrocsdev/leopardo/tree/main/img/logo.png)]

  Fast web framework for [Node.js](http://nodejs.org).

## Quick Start (Example)

```js
const leopardo = require('leopardo')
const app = leopardo()
const port = 3000

app.get('/', (req, res) => {
  res.end('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
```

## Installation

This is a Node.js module available through the
npm registry. Before installing, download and install Node.js.

If this is a brand new project, make sure to create a `package.json` first with
the `npm init`.

Installation is done using the
`npm install` command:

```console
$ npm install leopardo
```

## Features

* Robust Routing
* HTTP Helpers
* Built-in Middlewares
* Dynamic Content Engine
* Built-in Commands (MySQL, Changelog)

## Docs

* Website and Documentation

## Author

[Alejandrocsdev](https://github.com/Alejandrocsdev)

## License

[MIT](LICENSE)