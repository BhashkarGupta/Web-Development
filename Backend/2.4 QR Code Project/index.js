/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import {writeFile} from 'node:fs';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'url',
            message: 'Please input the URL: ',
        },
    ])
    .then((answers) => {
        writeFile('URL.txt', answers.url, (err) => {
            if(err) throw err;
        });
        console.log('file saved sucessfully');
        const qrContent = qr.image(answers.url, {type: 'svg'});
        qrContent.pipe(fs.createWriteStream('qr.svg'));
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong");
        }
    });

