const {a, add} = require("./local-1");
const {a: a2, add: add2} = require("./local-2");

console.log(add(2, 3));
console.log(add2(10, 10, 10));
console.log(module);

// build in modules
const path = require("path");
console.log(path.join("/D:/Web-Dev/Next-Level/nodejs", "local-1.js"));
