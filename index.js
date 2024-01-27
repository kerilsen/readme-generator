// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ username, repo, title, description, installation, usage, contributing, license, tests, email }) =>
    `# ${title}\n
    ![GitHub License](https://img.shields.io/github/license/${username}/${repo})\n
  ## Description\n
  ${description}\n
  The GitHub repository is here: ![GitHub Repo](https://github.com/${username}/${repo})\n
  The deployed link is here: ![Deployed page](https://${username}.github.io/${repo})\n
## Table of Contents\n
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)\n
  ## Installation\n
  ${installation}\n
  ## Usage\n
  ${usage}\n
  ## Contributing\n
  ${contributing}\n
  ## License\n
  ${license}\n
  ## Tests\n
  ${tests}\n
  ## Questions\n
  If you have any questions about this project, please contact me at ${email}.\n
  My GitHub profile is at: ![GitHub Profile](https://github.com/${username})\n`;

// TODO: Create an array of questions for user input
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
        message: 'What are the steps required to install your project?\nProvide a step-by-step description of how to get the development environment running.\nHit enter after each step.\n'
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Want to enter another step (just hit enter for YES)?',
        default: true,
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
        type: 'input',
        name: 'links',
        message: `Provide any links you would like to include in the credits in the following format: https://github.com/username\n`
    },
    {
        type: 'list',
        name: 'license',
        message: `The last section of a high-quality README file is the license.\nThis lets other developers know what they can and cannot do with your project.\n
The follow list is in order from highly protective to unconditional from https://choosealicense.com\n`,
        choices: [
            'GNU Affero General Public License v3.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v3.0',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The Unlicense',
        ]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
    }
];

function ask(answers) {
    const list = [];
    list.push(answers.installation)
    if (answers.askAgain) {
        ask();
    } else {
        return list;
    }
}

inquirer
    .prompt(questions)
    .then((answers) => {
        const READMEcontent = generateREADME(answers);
        fs.writeFile('README.md', READMEcontent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
