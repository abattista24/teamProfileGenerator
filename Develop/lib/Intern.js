// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// alter the employee file for intern
const Employee = require("/Employee.js")

class Intern extends Employee {
    // ask for github
    constructor(name, id, email, school) {
      super(name, id, email);
      //add school
      this.school = school;
    }
//access school 
    getSchool() {
        return this.Intern
    }
// Change role
    getRole(){
        return "Intern"
    } //now be intern

};

module.exports = Intern

