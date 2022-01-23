const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
        // call parent constructor here:
        super(name, id, email);
        // assigns O.N.
        this.gitHub = gitHub;
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;