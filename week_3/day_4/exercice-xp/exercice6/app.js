import chalk from "chalk"

const message = chalk.blue.bold('Hello! ') + chalk.green.underline('Welcome to Node.js ') + chalk.red('with Chalk!');

console.log(message);