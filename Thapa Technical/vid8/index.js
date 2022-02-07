const fs = require("fs")

fs.writeFileSync("read.txt", "Divyansh Mittal")

// const data = fs.readFileSync("read.txt", "utf-8")
// console.log(data);
// console.log("After the data");

fs.readFile("read.txt", "utf-8", (err, data)=>{
    console.log(data);
})
console.log("Written after but shown before the 'fs.readFile'");