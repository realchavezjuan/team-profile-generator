const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        // call parent constructor here:
        super(name, id, email);
        // assigns O.N.
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;