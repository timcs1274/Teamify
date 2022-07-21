const fs = require('fs');
const inquirer = require('inquirer');

function createManager(){
    console.log("create a manager")
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: `What is the manager's name`,
        }
        
    ]).then(answers => {console.log(answers)})
}



createManager()





//engineer

// {
//     type: 'input',
//     name: 'eng_name',
//     message: `'What is the engineer's name?'`,
// },
// {
//     type: 'input',
//     name: 'eng_id',
//     message: `'What is the engineer's ID?'`,
// },
// {
//     type: 'input',
//     name: 'eng_email',
//     message: `'What is the engineer's email?'`,
// },
// {
//     type: 'input',
//     name: 'eng_git',
//     message: `'What is the engineer's Github username?'`,
// },


//intern

// {
//     type: 'input',
//     name: 'intern_name',
//     message: `'What is the intern's name?'`,
// },
// {
//     type: 'input',
//     name: 'intern_id',
//     message: `'What is the intern's ID?'`,
// },
// {
//     type: 'input',
//     name: 'intern_email',
//     message: `'What is the intern's email?'`,
// },
// {
//     type: 'input',
//     name: 'intern_school',
//     message: `'What school does the intern attend?'`,
// },