const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: 'title',
        message: 'Whats the name of your project?',
    },
    {
        type: "input",
        name: 'description',
        message: 'What is your project about?',
    },
    {
        type: "input",
        name: 'installation',
        message: 'Provide installation guidelines:',
    },
    {
        type: "input",
        name: 'usage',
        message: 'Give details on how your project will be used:',
    },
    {
        type: "input",
        name: 'contributing',
        message: 'Provide information on the contribution guidelines for your project:',
    },
    {
        type: "input",
        name: 'tests',
        message: 'Provide test instructions for your project:',
    },
    {
        type: "input",
        name: 'license',
        message: 'Choose a license for your application:',
        choices: [
            'MIT',
            'Apache license 2.0',
            'Boost Software License 1.0'
        ]
    },
    {
        type: "input",
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: "input",
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: "input",
        name: 'questions',
        message: 'Please provide instuctions on how to reach you with additional questions:',
    },
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
