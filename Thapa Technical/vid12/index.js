// const operator = require("./operator");

// console.log(operator);

// console.log(operator.add(5,8));
// console.log(operator.sub(5,8));
// console.log(operator.multi(5,8));
// console.log(operator.name);


// Name should be same for all the functions in both files
// Order can differ
const { add, sub, name, multi } = require("./operator")

console.log(add(5, 58));
console.log(sub(5, 58));
console.log(multi(5, 58));
console.log(name);