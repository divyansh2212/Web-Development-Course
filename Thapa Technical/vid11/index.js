// Path Modules

const path = require("path")

console.log(path.dirname("C:/Codes/Complete Web Development BootCamp/Thapa Technical/vid11/index.js"));

console.log(path.extname("C:/Codes/Complete Web Development BootCamp/Thapa Technical/vid11/index.js"));

console.log(path.basename("C:/Codes/Complete Web Development BootCamp/Thapa Technical/vid11/index.js"));

console.log(path.parse("C:/Codes/Complete Web Development BootCamp/Thapa Technical/vid11/index.js"));

const myPath = path.parse("C:/Codes/Complete Web Development BootCamp/Thapa Technical/vid11/index.js");

console.log(myPath.name);
console.log(myPath.root);