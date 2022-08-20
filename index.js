const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeQuestions = [
    {
        type: 'input',
        name: 'person',
        message: 'Enter name: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email address: ',
        validate: (answer) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(answer)) {
              return "You have to provide a valid email address!"
            }
            return true
          }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter ID: ',
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter employee GitHub username: ',
    },
];

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number: ',
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'Enter school name: ',
    },
];

// needs promise chaining - maybe combine employeeQuestions and xQuestions in questions somehow?
// asynchronous js? 
function init() {
    return inquirer
        .prompt(questions)
        // prompt returns a promise - passed as answers
        .then((answers) => {
            const teamPageFile = generateTeamPage(answers);

            fs.writeFile('team-paged-generated.html', teamPageFile, (err) =>
                err ? console.log(err) : console.log('Successfully created team page!')
            );
        });
}

// Function call to initialize app
init();