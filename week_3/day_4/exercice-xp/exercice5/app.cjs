
const _ = require('lodash');

const math = require('./math.cjs');

const sum = math.add(5, 10);
const product = math.multiply(5, 10);

const numbers = [10, 5, 8, 3, 12];
const maxNumber = _.max(numbers);
const minNumber = _.min(numbers);

console.log("Sum:", sum);           
console.log("Product:", product);  
console.log("Max number:", maxNumber); 
console.log("Min number:", minNumber); 