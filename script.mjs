import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Function to list files in a directory
async function listFilesInDirectory(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    const filesWithDoubleQuotes = files.map(file => JSON.stringify(file));
    console.log('Files in the directory:', '[' + filesWithDoubleQuotes.join(', ') + ']');
  } catch (err) {
    console.error('Error reading the directory:', err);
  }
}

// Get the current script directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Specify the directory path you want to list files from
const directoryPath = path.join(__dirname, '/static/images/galery'); // Change '/example' to the desired directory

// Call the function to list files in the specified directory
listFilesInDirectory(directoryPath);