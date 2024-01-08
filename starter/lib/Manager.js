// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//importing employee constructor
const Employee = require("./Employee");

//extending employee constructor

class Manager extends Employee {
    constructor(name ,id ,email , officeNumber){

        // calling employee constructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    } 

    getOfficeNumber() {
        return this.officeNumber;
      }
   
    //overridden role to return manager
    getRole() {
        return "Manager";
    }
}
// to be exported
module.exports = Manager;