// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest")

// TODO: shapes function; populate the logo.svg pursuant to answer from terminal
const { circle, triangle, square } = require("./lib/shapes");

// TODO: Class LogoMaker with a constructor function to set fixed/variable values for text and shape elements
class LogoMaker {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(text,color) {
    this.textElement = `<text x="150" y="120" font-size="60" text-anchor="middle" alignment-baseline="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shapes) {
    this.shapeElement = shapes.render();
    }
}

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
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
        return console.log(err);
    }
    console.log("Your logo.svg has been successfully generated!");
    });
}

const init = () => {
    const logoMaker = new LogoMaker();

    inquirer.prompt(ArrayQuestions)
    .then((data) => {
    const TextLogo = data['Text-Logo'];
    const TextColor = data['Text-Color'];
    const ShapeType = data['Shape-Type'];
    const ShapeColor = data['Shape-Color'];

    // Set text and shape elements in logoMaker
    logoMaker.setTextElement(TextLogo, TextColor);

      switch (ShapeType) {
        case 'circle':
            logoMaker.setShapeElement(new circle(), ShapeColor);
            break;
        case 'triangle':
            logoMaker.setShapeElement(new triangle(), ShapeColor);
            break;
        case 'square':
            logoMaker.setShapeElement(new square(), ShapeColor);
            break;
    }

    writeToFile('logo.svg', logoMaker.render());
    })
    .then(() => console.log('Successfully applied to logo.svg'))
    .catch((err) => console.error(err));
};

init();