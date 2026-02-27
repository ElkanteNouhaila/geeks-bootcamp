const fs = require('fs');

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8'); 
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
}

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8'); 
    console.log(`Content written to ${filePath}`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

module.exports = {
  readFile,
  writeFile
};