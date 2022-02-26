// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !=="NO LICENSE"){
    return`<img src="https://img.shields.io/badge/LICENSE-${license}-blue.svg">`
    
  }else{return ""}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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
  
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
 
  ## Contributing
 ${answers.contributing}

 ## Tests
  ${answers.tests}

  ## Questions
   ${answers.questions}<br />
  <br />
  :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
  <br />
  ✉️ Email me with any questions: ${answers.email}<br /><br />
  _This README was generated with ❤️ by [README-generator](https://github.com/SuM949/node-Readme-Generator) 
      `;
    }


module.exports = generateMarkdown;
