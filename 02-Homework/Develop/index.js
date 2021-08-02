// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'Provide test instructions:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose a license for your application from the list of options:',
    },
    {
        type: 'input',
        name: 'github username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email address',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
