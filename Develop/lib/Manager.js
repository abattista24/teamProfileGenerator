// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//need to modify parent element employee
class Manager extends Employee {
    //add the office number
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officceNmber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
   
    //role changed to manager
    getRole(){
        return "Manager"
    };



//If Engineer (asked from employee page)
  // ask for github
  
//prompt
  // function to put github on html page
getGitHub() {
  return this.github
}

// function to set role as engineer on html page
getRole(){
  return "Engineer"
}


};
module.exports = Engineer