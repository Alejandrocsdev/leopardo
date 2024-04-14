[![Leopardo Logo](https://alejandrocsdev.github.io/leopardo/img/logo.png)](https://alejandrocsdev.github.io/leopardo/)

  Fast web framework for [Node.js](http://nodejs.org).

## Quick Start (Example)

```js
const leopardo = require('leopardo')
const app = leopardo()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm](https://www.npmjs.com/) registry. Before installing, [download](https://nodejs.org/en/download/) Node.js.

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

* [Website and Documentation](https://alejandrocsdev.github.io/leopardo/)

## Author

[Alejandrocsdev](https://github.com/Alejandrocsdev)

## License

[MIT](LICENSE)