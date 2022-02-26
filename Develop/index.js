// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
    type:"input", 
    name:"title",
    message: "What is the title of your project?"
}, {
    type:"input",
    name:"description",
    message:"Brief description of the project"
},
{
    type:"list",
    name:"license",
    message:"What license does your project have?",
    choices:["MIT","ISC","GNU","APACHE 2.0","NO LICENSE"]
},
   {
     
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((answers)=>{
     return writeToFile("/output/README.md",generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
