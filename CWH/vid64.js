const fs = require("fs");

console.log("Reading a file...");
let text = fs.readFileSync("testing.txt", "utf-8");
console.log(text);

text = text.replace("Divyansh", "MITTAL");
console.log("Creating a file...");
fs.writeFileSync("mittal.cpp", text);
