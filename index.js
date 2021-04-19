const inquirer = require('inquirer');
const fs = require('fs');

// Manager first
// ID
// Name
// Email
// Office number

// Engineer or intern?
// Would you like to add another employee?

// Engineer
// ID
// Name
// Email
// Github

//Intern
// ID
// Name
// Email
// School

inquierer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email address?",
        },
        
    ])