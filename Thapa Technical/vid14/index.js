const chalk = require("chalk")
const validator = require("validator")

const res = validator.equals("Divyansh","Divyansh");

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));