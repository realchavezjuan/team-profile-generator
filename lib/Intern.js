const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        // call parent constructor here:
        super(name, id, email);
        // assigns O.N.
        this.school = school;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;