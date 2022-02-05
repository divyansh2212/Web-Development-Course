const fs = require("fs")

// Creating a new file
fs.writeFileSync("read.txt", "Divyansh")

fs.writeFileSync("read.txt", "Hello! My name is Divyansh")

fs.appendFileSync("read.txt", " Mittal");

const buf_data = fs.readFileSync("read.txt")
// It will return buffer data
console.log(buf_data);

original_data = buf_data.toString()
console.log(original_data);

// Rename a file
fs.renameSync("read.txt", "write.txt")
fs.renameSync("write.txt", "read.txt")