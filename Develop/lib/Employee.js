// TODO: Write code to define and export the Employee class
//need inquirer
const inquirer =require("inquirer");
const util =require("util");

//Add employee
const employee = [
  {
    //add id number
    type:"input",
    message:"What is the employee ID?",
    name:"eId",
  },
  {
    //add email
    type:"input",
    message:"What is the employee's e-mail address?",
    name:"email",
  },
  {
    //ask employee type (engineer/intern)
    type:"list",
    message:"What is the type of employee?",
    name:"eType",
    choices: ["engineer", "intern", "manager"]
  },

   
]

//get employee information
inquirer.prompt(employee)
// console.log (employee.data)
 //Add to main html page