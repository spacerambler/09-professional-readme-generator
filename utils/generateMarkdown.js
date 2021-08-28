// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

## Table of Contents
*[Description](#header-description)
<br />
*[Installation](#header-installation)
<br />
*[Usage](#header-usage)
<br />
*[License](#header-license)
<br />
*[Contributing](#header-contributing)
<br />
*[Tests](#header-tests)
<br />
*[Questions](#header-questions)
<br />

## <a id="header-description"></a>Description
${answers.description}

## <a id="header-installation"></a>Installation
${answers.installation}

## <a id="header-usage"></a>Usage
${answers.usage}

## <a id="header-license"></a>License
${answers.license}

## <a id="header-contributing"></a>Contributing
${answers.contribution}

## <a id="header-tests"></a>Tests
${answers.test}

## <a id="header-questions"></a>Questions

[Check me out on Github](https://github.com/${answers.github})

[Email Me](mailto:${answers.email})

`;
}

module.exports = generateMarkdown;
