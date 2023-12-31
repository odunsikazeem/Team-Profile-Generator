// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name, id, email);
        this.school = school;
    } 
//It will return school from input
    getSchool () {
     return this.school;
    }

    //overidden role to return intern
    getRole(){
        return "Intern";
    }
    
}

// to be exported
module.exports = Intern;