import chalk from 'chalk';
import validator from 'validator'
// const chalk=require('chalk')
console.log(chalk.red('Success'))

let result=validator.isEmail('naveen@gmil.1com')
console.log(result)