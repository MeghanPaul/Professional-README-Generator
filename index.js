// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { triggerAsyncId } = require('async_hooks');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:
        'Enter Project Title: ',
        validate: titleInput => {
            if(titleInput)
            {
                return true;
            }else {
                console.log('Please enter your project name');
            }
        }
    }, 
    {
        type: 'input',
        name: 'description',
        message: 
        'Description of Project: ',
        validate: descriptionInput => {
            if(descriptionInput)
            {
                return true;
            }else {
                console.log('Please enter a description of your project');
                return false;
            }
        }
    },
    { 
        type: 'input',
        name: 'installation',
        message: 
        'Installation Instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 
        'Project\'s usage: '
    },
    { 
        type: 'list',
        name: 'license',
        message:
        'Select License: ',
        choices: ['Apache License 2.0','GNU GPLv3','GNU GPLv2','MIT','ISC']
    },
    { 
        type: 'input',
        name: 'contributing',
        message:
        'Contributing: '
    },
    { 
        type: 'input',
        name: 'tests',
        message: 
        'Tests: '
    },
    { 
        type: 'input',
        name: 'email',
        message:
        'Contact Email: '
    },
    { 
        type: 'input',
        name: 'gitHubName',
        message:
        'GitHub UserName: '
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject)=> {
        fs.writeFile(`./generatedProduct/${fileName}`,data, (err) => {
            //if there is an error, reject the promice and send the eroor to the promise's catch method
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(readMeData => {
            return generateMarkdown(readMeData);
        })
        .then(markdown => {
            return writeToFile('README.md',markdown);
        })
        .catch(err => {
            console.log(err);
        })
        
}

// Function call to initialize app
init();
