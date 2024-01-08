import { writeFile, readFile } from 'node:fs';

const data = 'Hello Node.js'; // Just a plain string

writeFile('message.txt', data, (err) => {
    if (err) throw err; // if any error happens, it will stop the execution of callback function and next line will not execute
    console.log('The file has been saved!');
});
   
// Now, read the file
readFile('message.txt', 'utf8', (err, fileData) => {
    if (err) throw err; // if any error happens, it will stop the execution of callback function and next line will not execute
    console.log('File content:', fileData);
});
