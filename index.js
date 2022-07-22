const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const outputDist = path.resolve(__dirname, 'dist');
const outputPath = path.join(outputDist, 'hmtlTemp') 
const generateTeam = require('./src/htmlTemp');

teamMembers = [];


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
                    createHTML();
                    
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
        
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        teamMembers.push(manager);
        createTeam();
    });
}



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
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        createTeam();
    });
}


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
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        createTeam();
    });
}

function createHTML () {
    fs.writeFileSync(outputPath, generateTeam(teamMembers), 'utf-8')
}

createTeam();

}

createEverything();