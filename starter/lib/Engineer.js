// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    } 

    getGithub () {
     return this.github;
    }

    //overidden role to return engineer
    getRole(){
        return "Engineer";
    }
    
}

// to be exported
module.exports = Engineer;