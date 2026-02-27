import fs from 'fs';

const directoryPath = './';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory:', err);
  }

  console.log('Files in directory:');
  files.forEach((file) => {
    console.log(file);
  });
});