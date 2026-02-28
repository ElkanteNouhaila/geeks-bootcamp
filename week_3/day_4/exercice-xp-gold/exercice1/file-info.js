import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function showFileInfo() {
  const filePath = path.join(__dirname, 'data', 'example.txt');

  const exists = fs.existsSync(filePath);
  console.log(`File exists: ${exists}`);

  if (exists) {
    const stats = fs.statSync(filePath);
    console.log(`File size: ${stats.size} bytes`);
    console.log(`Creation time: ${stats.birthtime}`);
  }
}