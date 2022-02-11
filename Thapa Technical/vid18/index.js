const fs = require("fs")

const car = {
    name: "Santro",
    model: "2008",
    color: "White",
}

const carString = JSON.stringify(car);
// console.log(car);
// console.log(carString);

fs.writeFile("jsonfile.json", carString,(err)=>{
    console.log("file created");
})

fs.readFile("jsonfile.json","utf-8",(err, data)=>{
    console.log(data);
    const orgdata = JSON.parse(data)
    console.log(orgdata);
})