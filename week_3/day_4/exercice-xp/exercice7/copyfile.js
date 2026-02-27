import fs from 'fs';

try {
  const data = fs.readFileSync('source.txt', 'utf8');
  fs.writeFileSync('destination.txt', data, 'utf8');
  console.log('File copied successfully!');
} catch (err) {
  console.error('Error:', err);
}