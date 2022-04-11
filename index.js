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



    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        teamMembers.push(manager);
        promptMain();
    })
}

const promptMain = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: "Which type of team member would you like to add?",
            choices: ["add engineer", "add intern", "I'm finished building my team."],
        },

    ])
    .then(userChoice => {
        switch (userChoice.main) {
            case "add engineer":
                promptEngineer();
                
                break;
            case "add intern":
                promptIntern();
                    
                break;
        
            default:
                break;
        }
    })
}

const promptEngineer = () => {
    console.log(`
    ================
    add new engineer
    ================`);
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        validate: engineerName => {
            if (engineerName) {
                return true;
            } else {
                console.log('Please enter a valid name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee id?",
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('Please enter a valid ID');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employees's email?",
        validate: employeeEmail => {
            if (employeeEmail) {
                return true;
            } else {
                console.log('Please enter a valid E-mail');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github?",
        validate: employeeGithub => {
            if (employeeGithub) {
                return true;
            } else {
                console.log('Please enter a valid Github username');
                return false;
            }
        }
    },
   
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptMain();
    })

};

const promptIntern = () => {
    console.log(`
    ================
    add new intern
    ================`);
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        validate: internName => {
            if (internName) {
                return true;
            } else {
                console.log('Please enter a valid name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee id?",
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('Please enter a valid ID');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employees's email?",
        validate: employeeEmail => {
            if (employeeEmail) {
                return true;
            } else {
                console.log('Please enter a valid E-mail');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's school?",
        validate: employeeSchool => {
            if (employeeSchool) {
                return true;
            } else {
                console.log('Please enter a valid Github username');
                return false;
            }
        }
    },
   
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptMain();
    })

};
