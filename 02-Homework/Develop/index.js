// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Provide installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide usage information:",
    },
    {
      type: "input",
      name: "contribution",
      message: "Provide contribution guidelines:",
    },
    {
      type: "input",
      name: "test",
      message: "Provide test instructions:",
    },
    {
      type: "input",
      name: "license",
      message:
        "Choose a license for your application from the list of options:",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);
};

// TODO: Create a function to write README file
// fs.writeFile('README.txt', init(answers))
// NEED HELP HERE -- REFRESHER

// TODO: Create a function to initialize app
function init() {
  promptUser().then((answers) =>
    fs.writeFile("README.md", generateMarkdown(answers), function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("Successfully wrote to README.md");
      }
    })
  );
}

// Function call to initialize app
init();
