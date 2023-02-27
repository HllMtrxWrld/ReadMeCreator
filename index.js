const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: 'title',
        message: 'What is your projects title?',
    }
];

// function to write README file
function writeToFile(response) {
    fs.writeFile('README.md', response, err => {
        err ? console.error(err) : console.log("The README.md is now created!")
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(generateMarkdown)
    .then(writeToFile);
}

// function call to initialize program
init();
