const Employee = require('./employee')

class Manager extends Employee {
    // name, id, email, github
    constructor(name, id, email, officeNum) {
        // this.name = name;
        // this.id= id;
        // this.email = email;
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getOfficeNum () {
        return this.officeNum;
    }

    getRole() {
        return "Manager"
    }

}

module.exports = Manager;