const fs = require("fs")

// fs.writeFile("read.txt", "My name is Divyansh.", (err) => {
//     console.log("Task 1 completed");
// })

// fs.writeFile("read.txt", "My name is Divyansh ",(err)=>{
//     console.log("Task 2 completed");
// })

// fs.appendFile("read.txt", "Mittal", (err)=>{
//     console.log("Task 3 completed!");
//     console.log(err);
// })

// fs.rename("read.txt", "readi.txt", (err)=>{
//     console.log("Task 4 completed!");
//     console.log(err);
// })

fs.readFile("readi.txt", "utf-8",(err, data)=>{
    if(err) throw err
    console.log(data);
})