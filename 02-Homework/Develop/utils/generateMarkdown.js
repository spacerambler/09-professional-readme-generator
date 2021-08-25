// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
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

`;
}

module.exports = generateMarkdown;
