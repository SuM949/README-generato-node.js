// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !=="NO LICENSE"){
    return`<img src="https://img.shields.io/badge/LICENSE-${license}-blue.svg">`
    
  }else{return ""}
}


function renderLicenseLink(license) {
  if(license !=="NO LICENSE"){
    return`* [License](#license)`
    
  }else{return ""}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !=="NO LICENSE"){
    return`## License
    this project is licensed under  ${license}.`
    
  }else{return ""}
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} 

  ## Description
  ${data.description}
  
  ## Table of content
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
   ${renderLicenseLink(answers.license)}
  - [Questions](#questions)
  
  ## Installation
  Run the following script to install the packages required for the application
  ${answers.installation}

 ## Usage 
 To use the application run the following script
  ${renderLicenseLink(data.license)}
 
  ## Contributing
 ${answers.contributing}

 ## Tests
 To use the application run the following script
  ${answers.tests}

  ## Questions
   ${answers.questions} 
  - Email me with any questions: ${answers.email}
  - Find me on GitHub: [${answers.username}](https://github.com/${answers.username}
    


module.exports = generateMarkdown;
