/**
 * Recursive prompt example
 * Allows user to choose when to exit prompt
 */

const inquirer = require('inquirer');
const output = [];

const questions = [
  {
    type: 'input',
    name: 'tvShow',
    message: "What's your favorite TV show?",
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another TV show favorite (just hit enter for YES)?',
    default: true,
  },
  {
    type: 'input',
    name: 'movie',
    message: "What's your favorite movie?",
  },
  {
    type: 'input',
    name: 'song',
    message: "What's your favorite song?",
  },
];

function ask() {
  inquirer.prompt(questions).then((answers) => {
    output.push(answers.tvShow);
    if (answers.askAgain) {
      ask();
    } else {
      console.log('Your favorite TV Shows:', output.join(', '));
    }
  });
}

ask();