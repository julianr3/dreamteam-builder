const Employee = require('./employee')

class Engineer extends Employee {
    // name, id, email, github
    constructor(name, id, email, github) {
        // this.name = name;
        // this.id= id;
        // this.email = email;
        super(name, id, email);
        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer;

// const newEngineer = new Engineer("John", 1, "john@mail.com", "john123")

// console.log(newEngineer);

// console.log(newEngineer.getGithub())