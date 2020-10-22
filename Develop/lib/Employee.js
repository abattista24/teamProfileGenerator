// TODO: Write code to define and export the Employee class

//Add employee
class Employee {
  constructor(name, id, email){
  this.name = name;
  //add id number
  this.id = id
  //add email
  this.email =email;
  //ask employee type (engineer/intern/manager), use to decide which file to go to to change class...maybe?
  // this. role = role;
  };

//get employee information
  getName(){
    return this.name
  };
  getId(){
    return this.id
  };
  getEmail(){
    return this.email
  };
  //display employee as role
  getRole(){
  return "Employee"
  };
};
 //Add to main html page

 module.exports = Employee

