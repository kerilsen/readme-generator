// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

async function getUserInput() {
    const questions = await inquirer.prompt([
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
            message: 'Do you want to enter another step?',
            default: true,
            when: (answers) => answers.askAgain,
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
    ]);

    const answers = await inquirer.prompt(questions);

    if (answers.askAgain) {
        const entryArray = answers.entries.split(',').map(entry => entry.trim());
        console.log(`Entries: ${entryArray}`);

        // You can continue chaining more prompts or perform actions here
        await getUserInput();
    } else {
        console.log('Exiting the program. Goodbye!');
    }
}

// if (answers.askAgain) {
//     await getUserInput();
// } else {
//     console.log("Exiting the program. Goodbye!");
// }


// function ask(answers) {
//     // answers.push(answers.installation)
//     if (answers.askAgain) {
//         ask();
//     } else {
//         return;
//     }
// }

getUserInput();

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'installation',
//             message: "What are the steps required to install your project?",
//         },
//         {
//             type: 'confirm',
//             name: 'askAgain',
//             message: 'Want to enter another step (just hit enter for YES)?',
//             default: true,
// when(answers) {
//     return ask();
// }
//         }
//     ])
//     .then((answers) => {
//         if (answers.askAgain) {
//             console.log('They said yes')
//         }
//     })
//     .prompt([{
//         type: 'input',
//         name: 'usage',
//         message: 'Provide instructions and examples for use.\n'
//     }])

//     .then(answers2 => {
//         console.log(answers2);
//     })

// function ask(answers) {
//     answers.push(answers.installation)
//     if (answers.askAgain) {
//         ask();
//     } else {
//         return answers;
//     }
// }

//   inquirer.prompt(questions).then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//   });