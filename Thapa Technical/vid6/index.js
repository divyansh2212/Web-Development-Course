const fs = require("fs")

// fs.mkdirSync("thapa")

fs.writeFileSync("thapa/bio.txt", "my teacher is thapa")

fs.appendFileSync("thapa/bio.txt", " technical")

const buff_data = fs.readFileSync("thapa/bio.txt")
console.log(buff_data);

const data = fs.readFileSync("thapa/bio.txt", "utf-8")
console.log(data);

// fs.renameSync("thapa/bio.txt", "thapa/mybio.txt")

// to delete a file 
// fs.unlinkSync("thapa/bio.txt")

// to delete a folder 
// fs.rmdirSync("thapa")