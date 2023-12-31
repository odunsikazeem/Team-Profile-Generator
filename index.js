const Manager = require("./starter/lib/Manager.js");
const Engineer = require("./starter/lib/Engineer.js");
const Intern = require("./starter/lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./starter/src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//team members profile
const teamMembers = [];

// Manager's questions
const managerQuestions = () => {
  return inquirer.prompt([ {
    type: "input",
    name: "name",
    message: "What is your name as Team Manager?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "Kindly input your email:",
  },
  
  {
    type: "input",
    name: "officeNumber",
    message: "Input the office number?",
  },
]).then(value => {
  const manager = new Manager(value.name, value.id, value.email, value.officeNumber);
  teamMembers.push(manager);
  memberOption();
})
}

// CHOOSE EMPLOYEE
const memberOption = () =>{
  return inquirer.prompt([
  {
      type: "list",
      name: "Member",
      message:  "Team member you would like to add?",
      choices: [
          "Engineer",
          "Intern",
          "Finish building the team"
      ]
  }
  ]).then(userInput => {
      switch (userInput.memberOption) {
          //switch statement
          case "Engineer":
              engineerQuestions();
              break;
          case "Intern":
              internQuestions();
              break;
          case "Finish building the team":
          // default
              buildHtml();
              break;
      }
  });
  } 

//Engineer's question 
const engineerQuestions = () =>{
  return inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "Engineer's id?",
  },
  {
    type: "input",
    name: "email",
    message: "Please input engineer;s email?",
  },
  {
    type: "input",
    name: "github",
    message: "Kindly input engineer's GitHub username?",
  },

]).then(value =>{
  const engineer = new Engineer(value.name, value.id, value.email, value.github);
  teammates.push(engineer);
  memberOption();
});
}

//Intern's question 
const internQuestions = () => {
  return inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "Intern's id?",
  },
  {
    type: "input",
    name: "email",
    message: "Please input intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "Kindly input intern's school?",
  },

]).then(value =>{
  const intern = new Intern (value.name, value.id, value.email, value.school);
  teammates.push(school);
  memberOption();
});
};


// function for building the html file
const buildHtml = () => {
  console.log("Your Team is Created!")

  fs.writeFileSync(outputPath, render(teamMembers), "UTF-8")

}


//INIT FUNCTION
managerQuestions();

