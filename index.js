const fs = require('fs');
const inquirer = require('inquirer');

function createManager(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: `What is the manager's name?`,
        },
        {
            type: 'input',
            name: 'managerId',
            message: `What is the manager's ID?`,
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: `What is the manager's email?`,
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: `What is the manager's office number?`,
        }
        
    ]).then(answers => {console.log(answers)})
}

createManager()

function createEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: `What is the engineer's name?`,
        },
        {
            type: 'input',
            name: 'engineerId',
            message: `What is the engineer's ID?`,
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: `What is the engineer's email?`,
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: `What is the engineer's Github username?`,
        }
    ]).then(answers => {console.log(answers)})
}
createEngineer()

function createIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: `What is the intern's name?`,
        },
        {
            type: 'input',
            name: 'internId',
            message: `What is the intern's ID?`,
        },
        {
            type: 'input',
            name: 'internEmail',
            message: `What is the intern's email?`,
        },
        {
            type: 'input',
            name: 'internSchool',
            message: `What school does the intern attend?`,
        },
    ]).then(answers => {console.log(answers)})
}
createIntern()


