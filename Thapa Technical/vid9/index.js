const fs = require("fs")

// Creating a folder
// fs.mkdir("thapa", (err) => {
//     if (err) throw err;
//     console.log("Task 1 Completed");
// })

// Creating a file in thapa folder
// fs.writeFile("thapa/bio.txt", "My teacher is Thapa Technical", (err) => {
//     if (err) throw err
//     console.log("Task 2 Completed");
// })

// Appending a data in file
// fs.appendFile("thapa/bio.txt"," Guru",(err)=>{
//     if(err) throw err
//     console.log("Task 3 Completed");
// })

// Data Reading
// fs.readFile("thapa/bio.txt","utf-8",(err, data)=>{
//     if(err) throw err
//     console.log(data);
//     console.log("Task 4 completed");
// })

// Renaming a file
// fs.rename("thapa/bio.txt", "thapa/mybio.txt", (err)=>{
//     if(err) throw err
//     console.log("Task 5 completed!");
// })

// // To delete a file
// fs.unlink("thapa/mybio.txt",(err)=>{
//     console.log("Task 6 completed!");
// })

// To delete a folder
fs.rmdir("thap", (err) => {
    if (err) throw err;
    console.log("Task 7 completed!");
})