import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const renameFiles = async (folderPath) => {
    try {
        let i = 0; 
        const files = await fs.readdir(folderPath);

        for (const file of files) {
            i = i+1;
            const oldPath = path.join(folderPath, file);
            const newPath = path.join(folderPath, `galery_image_${i}.jpg`);
            await fs.rename(oldPath, newPath);
        }
    } catch (error) {
        console.log(error);
    }
};

// Get the current script directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Specify the directory path you want to list files from
const directoryPath = path.join(__dirname, '/static/images/galery'); // Change '/example' to the desired directory
console.log(directoryPath)
// Call the function to list files in the specified directory
renameFiles(directoryPath);