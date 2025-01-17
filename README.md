# TypeScript Fundamentals

Code samples from the TypeScript Fundamentals course on [Pluralsight.com](https://pluralsight.com). Samples for each module from the course can be found in the `src` directory.

## Running the Project

1. Install Node.js LTS ([https://nodejs.org](https://nodejs.org))
1. Open a command window at the root of this project
1. Run `npm install`
1. Run `npm start` to start the web server and run the app

**NOTE:**

Running `npm start` compiles your TypeScript and loads the JavaScript bundle into memory (you won't see a `dist` folder created in this case).
If you want to compile your TypeScript and create a bundle in the `dist` folder you can run `npm run webpack` or
`npm run webpack:w` (if you want webpack to watch for changes to files).

## Credits

Font Awesome Free icons are being used as per the kit guidelines https://fontawesome.com/kits


## Notes

### Key Features

- Strongly Typed
- Classes
- Interfaces
- Generics
- Compiled to Javascript
- Functions

### Getting started

Compile it to javascript and write it to dist folder
- npx --package typescript tsc --outDir dist

Create a new package.json file.
- npm init -y

Install typescript as dev dependecy from npm.
- npm install typescript --save-dev

Great site to find browser versions and feature support.
[https://caniuse.com]

### Using Variables, Types and Enums

- string
- number
- boolean
- array
- any

- enum minimize "magic strings" in code
- const enum: save a lot of javascript code after compilation

### Creating and Using Functions

- Typed Parameters
- Defining functions
- return values
- Async/Await
- Optional parameters
- Arrow functions
- Default parameters
- Rest parameters
- Parameter destructuring

### Interfaces

#### Interface vs Type

Interfaces are code contracts.

Only for development time.

Interfaces only allows to define shapes of object data structure.
A Type can also act as an representative of primitive types too.

let ProductAlias = string | {id: number, name: string}

