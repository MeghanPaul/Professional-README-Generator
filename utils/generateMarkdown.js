// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
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
    return '';
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
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  This project is licensed under [${license}](${renderLicenseLink(license)})
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}  
  ${data.description}

  ## Table of Contents  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## How to Contribute
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Points of contact for any further questions!  
  Email: ${data.email}  
  Link to GitHub Profile: https://github.com/${data.gitHubName}

`;
}

module.exports = generateMarkdown;
