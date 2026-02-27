const { readFile, writeFile } = require('./filemanager.cjs');

const helloContent = readFile('hello world.txt');
console.log("Read content:", helloContent);

writeFile('bye world.txt', 'Writing to the file');