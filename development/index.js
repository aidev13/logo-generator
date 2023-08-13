import inquirer from "inquirer"; 





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
        type: 'list',
        name: 'txtColor',
        message: 'Pick a text color: ',
        choices: ['red', 'blue', 'green', 'black', 'white']
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
        type: 'list',
        name: 'shapeColor',
        message: 'Pick a shape color: ',
        choices: ['red', 'blue', 'green']
    }
    //create SVG file
        //output text in command line 'Generated logo.svg'
        //logo is generated @300x200px
]).then((response) => {
    console.log(response)
})
.catch((err) => console.log(err))

