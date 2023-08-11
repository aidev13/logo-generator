import inquirer from "inquirer"; 

inquirer.prompt([
    {
        type: 'confirm',
        name: 'welcome',
        message: 'Welcome to logo-generator! Y = begin, N = end'
    
    },
    {
        typt: 'input',
        name: 'charc',
        message: 'Please select up to 3 charatcers'
        validate: function() {

        }
    }

   
]).then((response) => console.log(response))
.catch((err) => console.log(err))

