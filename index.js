const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's id?",
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's email?",
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's office number?",
        },
        // team member questions
        {
            type: 'list',
            name: 'name',
            message: "Which type of team member would you like to add?",
            choices: ['intern', 'engineer'],
        },

        
    ])