// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// TODO: shapes function; populate the logo.svg pursuant to answer from terminal
const shapes = require('./lib/shapes');

// TODO: Create an array of questions for user input
const ArrayQuestions = [
    {
        type: 'input',
        name: 'Text-Logo',
        message: 'Enter the -Text for LOGO- up to 3 characters:',
    },
    {
        type: 'input',
        name: 'Text-Color',
        message: 'Enter the -Color keyword or Hexadecimal number of Color- of the Text:',
    },
    {
        type: 'list',
        name: 'Shape-Type',
        message: 'Choose the -Shape of the LOGO- from the followings:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'Shape-Color',
        message: 'Enter the -Color keyword or Hexadecimal number of Color- of the Shape:',
    },
]

// TODO: Function to create logo.SVG file
function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your logo.svg has been successfully generated!")
    });
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(ArrayQuestions)
      .then((data) => writeToFile('logo.svg', shapes(data)))
      .then(() => console.log('Successfully applied to logo.svg'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app 
  init();
