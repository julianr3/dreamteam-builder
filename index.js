const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const teamMembers = [];

const promptManager = () => {
    console.log(`
    ================
    MANAGER PROFILE
    ================`);
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
            name: 'main',
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
                buildTeam();
                break;
        }
    })
}

const promptEngineer = () => {
    console.log(`
    =================
    ENGINEER PROFILE
    =================`);
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
        message: "What is the engineer's id?",
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
        message: "What is the engineer's email?",
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
    INTERN PROFILE
    ================`);
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
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
        message: "What is the intern's id?",
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
        message: "What is the intern's email?",
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
        name: 'school',
        message: "What is the intern's school?",
        validate: employeeSchool => {
            if (employeeSchool) {
                return true;
            } else {
                console.log('Please enter a valid school');
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

const buildTeam = () => {
    console.log(`
    =======================
    Team building complete!
    =======================`);
}

promptManager();
