// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;   
    } 

//It will return name from input
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
//It will return email from input
    getEmail(){
        return this.email;
    }

//It will return type of employee
    getRole(){
        return "Employee";
    
    }
}
    
    // exported module to be used by others
    module.exports = Employee;