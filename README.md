# Node.js

_It was created by Ryan Dahl in 2009._
_It is maintained by the OpenJS Foundation._

## Table of Contents

- [Episode 01 | Introduction to Node.js](#episode-01--introduction-to-nodejs)
- [Episode 02 | JS on Server](#episode-02--js-on-server)
- [Episode 03 | Let's write code](#episode-03--lets-write-code)
- [Episode 04 | Module.export & require](#Episode-04-Module.export-require)
- [Episode 05 | Diving into the Node.js repo](Episode-05-Diving-into-the-Node.js-repo)

## Episode 01 | Introduction to Node.js

### Key Concepts

- **What is Node.js?**
  - A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - Allows you to run JavaScript on the server side.
  - It was an event-driven, non-blocking I/O model that makes it lightweight and efficient.
- **Engine**
  - Node.js uses the V8 engine, which is the same engine that powers Google Chrome.
  - V8 compiles JavaScript directly to machine code, making it very fast.
  - Firefox uses the SpiderMonkey engine, and Safari uses the JavaScriptCore engine.

## Episode 02 | JS on Server

### Key Concepts

- v8 Engine
  - V8 is an open-source JavaScript engine developed by Google.
  - It is written in C++ and is used in Google Chrome and Node.js.
  - V8 compiles JavaScript to machine code at runtime, which improves performance.
  - ECMAScript is the standard that JavaScript is based on. V8 implements the ECMAScript specification.

## Episode 03 | Let's write code

### Key Concepts

- **REPL**
  - REPL stands for Read-Eval-Print Loop.
  - It is an interactive programming environment that takes single user inputs (like expressions), evaluates them, and returns the result to the user.
  - In Node.js, you can start the REPL by simply typing `node` in your terminal.
  - You can exit the REPL by typing `.exit` or pressing `Ctrl + C` twice.
- **Global Objects**
  - `console`: Used for printing output to the terminal.
  - `setTimeout()`: Schedules a function to be executed after a specified delay.
  - `setInterval()`: Schedules a function to be executed repeatedly at specified intervals.
  - `clearTimeout()`: Cancels a timeout set with `setTimeout()`.
  - `clearInterval()`: Cancels an interval set with `setInterval()`.
  - `process`: Provides information about, and control over, the current Node.js process. It can be used to access command-line arguments, environment variables, and more.
  - `__dirname`: A global variable that contains the directory name of the current module.
  - `__filename`: A global variable that contains the file name of the current module.
  - On chrome `window` is the global object, but in Node.js the global object is `global` and `this` refers to an empty object `{}` in the module scope and `this` refers to `global` in the REPL. `Self` is Window's equivalent of `this`on the global scope.
  - GlobalThis is a standard way to refer to the global object across different JavaScript environments.

```javascript
console.log(global); // Node.js global object
console.log(this); // {}
console.log(globalThis === this); // false
console.log(global === globalThis); //true
console.log(global === this); // false
```

## Episode 04 | Module.export & require

### Key Concepts

- require module
  - modules protects their variables and function from leaking
- Two types of Module patterns
  - CommonJS(_module.exports & require_)
    - Sync
    - NonStrict
  - ES Modules (_import & export_)
    - In package.json (type='module')
    - Async
    - Strict

```js
//filename1: sum.js
function sumOfTwo(x, y) {
  cc = x + y;
  console.log(cc);
}
let x = 999;
let y = 888;
module.exports = { x, y, sumOfTwo }; //commonJS modules(modules.exports & require)

//filename2: app.js
const { sumOfTwo, x, y } = require("./sum"); //destructuring on fly
sumOfTwo(10, 20);
z = x + y;
console.log(z);
```

## Episode 05 | Diving into the Node.js repo

- IIFE (_Immediately Invoked Function Expression_)
  - `(function (){ })()`Calling Anonymous function immediately
