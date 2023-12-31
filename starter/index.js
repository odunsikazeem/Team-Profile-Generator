const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.





const questions = [ {
    type: "input",
    name: "title",
    message: "What is the title of the application?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please describe how to install this application.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "usage",
    message:
      "Briefly describe the usage of the application.",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors.",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "How can a user test the application?",
  },

];


// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating HTML webpage...");
        writeToFile("./src/page-template.js",({ ...responses }));
      });

}

// function call to initialize program
init();


