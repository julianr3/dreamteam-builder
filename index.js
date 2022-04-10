const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is the team manager's office number?",
        },
        // team member questions
        // {
        //     type: 'list',
        //     name: 'name',
        //     message: "Which type of team member would you like to add?",
        //     choices: ['intern', 'engineer'],
        // },

       
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        teamMembers.push(manager);
    })
}