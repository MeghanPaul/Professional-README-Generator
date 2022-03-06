// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license!='Other/None'){
    if(license == 'Apache License 2.0'){
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`;
    }else if(license == 'GNU GPLv3'){
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`;
    }else if(license == 'GNU GPLv2'){
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](${renderLicenseLink(license)})`;
    }else if(license == 'MIT'){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
    }else{
      //ISC
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](${renderLicenseLink(license)})`;
    }
  }else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    if(license == 'Apache License 2.0'){
      return 'https://opensource.org/licenses/Apache-2.0';
    }else if(license == 'GNU GPLv3'){
      return 'https://www.gnu.org/licenses/gpl-3.0';
    }else if(license == 'GNU GPLv2'){
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    }else if(license == 'MIT'){
      return 'https://opensource.org/licenses/MIT';
    }else{
      //ISC
      return 'https://opensource.org/licenses/ISC';
    }
  }else{
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!='Other/None'){
    return `
    ## License
    ${renderLicenseBadge(license)}
    This project is licensed under [${license}](${renderLicenseLink(license)})
    `;
  }else{
    return ` `;
  }
}

function renderInstallationSection(installation)
{ 
  if(installation)
  {
    return`## Installation
    ${installation}`;
  }else{
    return ` `;
  }
}

function renderUsageSection(usage)
{
  if(usage)
  {
    return`## Usage
    ${usage}
    `;
  }else{
    return ` `;
  }
}

function renderContributeSection(contributing)
{
  if(contributing)
  {
    return`## How to Contribute
    ${contributing}
    `;
  }else{
    return ` `;
  }
}

function renderTestingSection(tests)
{
  if(tests)
  {
    return`## Tests
    ${tests}
    `;
  }else{
    return ` `;
  }
}

function renderTableOfContents(data)
{
  let returnStr = ``;
  if(data.installation)
  {
    returnStr+=`- [Installation](#installation)\n`;
  }
  if(data.usage)
  {
    returnStr+=`- [Usage](#usage)\n`;
  }
  if(data.license!='Other/None')
  {
    returnStr+=`- [License](#license)\n`;
  }
  if(data.contributing)
  {
    returnStr+=`- [How to Contribute](#how-to-contribute)\n`;
  }
  if(data.tests)
  {
    returnStr+=`- [Tests](#tests)\n`;
  }
  returnStr+=`- [Questions](#Questions)\n`;

  return returnStr;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}  
${data.description}

## Table of Contents  
${renderTableOfContents(data)}

${renderInstallationSection(data.installation)}

${renderUsageSection(data.usage)}

${renderLicenseSection(data.license)}

${renderContributeSection(data.contributing)}

${renderTestingSection(data.tests)}

## Questions
Points of contact for any further questions!  
[Email](${data.email})  
[GitHub](https://github.com/${data.gitHubName})

`;
}

module.exports = generateMarkdown;
