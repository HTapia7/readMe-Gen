// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const readMeSkeleton = (resp) => 
`# ${resp.title}

## Description

* ${resp.description}

## Installation 

## Usage

## License

## Credits

## Test

## Questions

`


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your project?'
        },
        {
            name: 'description',
            type: 'input',
            message: 'Provide a short description of your project?' 
        },
        {
            name: 'credit',
            type: 'input',
            message: 'Who are the collaborators?'
        }
    ]).then ((resp) => {
    fs.writeFile(`readme.md` ,readMeSkeleton(resp), () => (err) => {
        if(err){
            console.log(err)
        }
        return console.log('success')
        })
    })
}

// Function call to initialize app
init();