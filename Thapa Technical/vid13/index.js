const chalk = require("chalk");
const validator = require("validator");

// console.log(chalk.red("Failed!"));
// console.log(chalk.red.inverse("Failed!"));

// console.log(chalk.green("Success!"));
// console.log(chalk.green.inverse("Success!"));

const res = validator.isEmail("mittaldivyansh2212@gmail.com")
console.log(res ? chalk.green.inverse(res) : chalk.redBright.inverse(res));