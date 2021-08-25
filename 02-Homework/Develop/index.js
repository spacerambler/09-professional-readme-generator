// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
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
        name: 'installation-instructions',
        message: 'Provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage-information',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'contribution-guidelines',
        message: 'Provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test-instructions',
        message: 'Provide test instructions:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose a license for your application from the list of options:',
    },
    {
        type: 'input',
        name: 'github-username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email-address',
        message: 'What is your email address?',
    },
])
}

// TODO: Create a function to write README file
function writeToFile(README, data) {
    `
    # ${answers.title}

## Table of Contents
*[Description](#header-description)
*[Installation](#header-installation)
*[Usage](#header-usage)
*[License](#header-license)
*[Contributing](#header-contributing)
*[Tests](#header-tests)
*[Questions](#header-questions)

## <a id="header-description"></a>Description
${answers.description}

## <a id="header-installation"></a>Installation
${answers.installation-instructions}

## <a id="header-usage"></a>Usage
${answers.usage-information}

## <a id="header-license"></a>License
${answers.license}

## <a id="header-contributing"></a>Contributing
${answers.contribution-guidelines}

## <a id="header-tests"></a>Tests
${answers.test-instructions}

## <a id="header-questions"></a>Questions

[Check me out on Github](https://github.com/${answers.github-username})
[Email Me](mailto:${answers.email-address})

    `
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => writeFileAsync('README.txt', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to README.txt'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
