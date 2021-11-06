// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const fs = require('fs');
const inquirer = require('inquirer');

// Prompt the user
inquirer
  .prompt([
    {
      type: 'input',
      name: 'project',
      message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.'
      },
      {
        type: 'input',
        name: 'instal',
        message: 'Give a description of any installation instructions your project might have.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'List usage information.'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'List contribution guidelines.'
      },
    {
        type: 'input',
        name: 'test',
        message: 'List test instructions.'
    },
    {
      type: 'list',
      message: 'Choose a license for your project',
      name: 'license',
      choices: ['Apache License 2.0', 'MIT', 'ISC', 'GNU GPLv3', 'GNU GPLv2']
    },
   
  ]) // Write the user response to a file by chaining the below callback method to the prompt above.
  .then(function(data) {
    // Bonus: Generate the name of your user file from their input
    const filename = 'README.md';
    const body = `
    
    # Your Project Title
    ##${data.project}

    ## Description 
    ###${data.description}

        
    ## Table of Contents (Optional)
        
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    
    ## Installation
    ###${data.instal}
    
    ## Usage 
    ###${data.usage}
    
    ![alt text](assets/images/screenshot.png)

    
    ## License
    ###${data.license}(https://img.shields.io/badge/license-MIT-blue.svg)
    ---
    
    ## Badges
    ###${data.license}
    
    ## Contributing
    ###${data.contribution}

    ## Tests
    ###${data.test}

    `

    fs.writeFile(filename, body, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  });
