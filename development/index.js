import inquirer from "inquirer"; 
import fileSystem from 'fs';
import { getSVG } from "./utils/generatelogo.js";


inquirer.prompt([
   //prompt for 3 charcters or less
    {
        type: 'input',
        name: 'charc',
        message: 'Please select up to 3 characters: ',
        validate: function(charc) {
            return charc.length < 4;
        }
    },
    //prompt for a txt color
    {
        type: 'input',
        name: 'txtColor',
        message: 'Pick a text color: ',
        // choices: ['red', 'blue', 'green', 'black', 'white']
    },
    //prompt for a shape
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape for your logo: ',
        choices: ['circle', 'triangle', 'square']
    },
    //prompt for shapes color
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Pick a shape color: ',
        // choices: ['red', 'blue', 'green']
    }
    
])
 .then(response => {
        const svgFile = getSVG(response)
        fileSystem.writeFile(`./svg/${response.charc}.svg`, svgFile, err => {
            if (err) {throw err}
            console.log('Generated logo.svg')
        })
    })
.catch((err) => console.log(err))


