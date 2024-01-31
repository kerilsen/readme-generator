// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generate = require('./utils/generateMarkdown.js');
    
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the GitHub repository name for this project (i.e. project-name)?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: `Provide a short description explaining the what, why, and how of your project.\n
* What was your motivation?\n
* Why did you build this project?\n
* What problem does it solve?\n
* What did you learn?\n`
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?\nProvide a step-by-step description of how to get the development environment running.\n'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.\n'
    },
    {
        type: 'input',
        name: 'contributing',
        message: `List your collaborators, if any, with links to their GitHub profiles.\n
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\n
If you followed tutorials, include links to those here as well.\n`
    },
    {
        type: 'list',
        name: 'license',
        message: `The last section of a high-quality README file is the license.\nThis lets other developers know what they can and cannot do with your project.\n
The following list is in order from highly protective to unconditional from https://choosealicense.com\n`,
        choices: [
            { name: 'GNU Affero General Public License v3.0', value: 0 },
            { name: 'GNU General Public License v3.0', value: 1 },
            { name: 'GNU Lesser General Public License v3.0', value: 2 },
            { name: 'Mozilla Public License 2.0', value: 3 },
            { name: 'Apache License 2.0', value: 4 },
            { name: 'MIT License', value: 5 },
            { name: 'Boost Software License 1.0', value: 6 },
            { name: 'The Unlicense', value: 7 }
        ]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
    }
];

// Write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// Initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const README = generate(answers);
            writeToFile('README.md', README);
        })
};

// Function call to initialize app
init();