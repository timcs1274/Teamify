const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const outputDist = path.resolve(__dirname, 'dist');
const outputPath = path.join(outputDist, 'index.html') //change to the generated html file name

function createEverything (){

    function createTeam() {
        inquirer.prompt([{
            type: 'list',
            name: 'addEmployee',
            message: 'Which type of employee do you wish to add to the team?',
            choices: ['Manager', 'Engineer', 'Intern', 'None']
        }]).then(function (userInput) {
            switch(userInput.addEmployee) {
                case 'Manager':
                    createManager();
                    break;
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Intern':
                    createIntern();
                    break;
                default:
                    //add the html function
                    
            }
        })
    }




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


}