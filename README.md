# ersm-api-client

Client library for the ersm-api



Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))


## Installation ##

`npm install ersm-api-client`

or 

`yarn add ersm-api-client`


## Example ##
```javascript
const client = require('ersm-api-client')

const api = client.ErsmApiFactory(undefined,"https://ersm-api-dev.azurewebsites.net/")

api.contactPeople
    .apiContactsPeopleGet()
    .then(p => console.log(p))
    .catch(err => console.log(err));
```