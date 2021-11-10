// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeFile = (fileName, data) => {

  fs.writeFile(fileName, data, err => {
      if (err) {
          return console.log(err);
      }
      console.log('Your file has been created!');

  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

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
   
  ]) 
  
  // Write the user response to a file by chaining the below callback method to the prompt above.
  .then(function(data) {
    
 // Bonus: Generate the name of your user file from their input

    let filename = `README.md`;
    const body = `
# Project Title
## ${data.project}

![Badge for License](https://img.shields.io/badge/license-${data.license}-informational)

## Table of Contents
* [Project Description](#description)   
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contribution)

## Description 
* ${data.description}
    
## Installation
* ${data.instal}
    
## Usage 
* ${data.usage}

## License
* ${data.license}(https://img.shields.io/badge/license-MIT-blue.svg)
    
## Contributing
* ${data.contribution}

## Tests
* ${data.test}
     
## Badges
* ${data.license}

    `

    fs.writeFile(filename, body, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  });
