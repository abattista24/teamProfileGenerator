// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//If Engineer (asked from employee page)
class Engineer extends Employee {
  // ask for github
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  
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

