const inquirer = require('inquirer')
const path = require("path");
const fs = require('fs')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "managerteam.html")

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const team = [];
const arrayIds = [];

function startUp(){

  function makeNewManager() { 
    console.log("You may begin creating your team");  
    inquirer.prompt([   
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter manager's email address"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office phone number?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        arrayIds.push(answers.id);
        makeNewTeam();
    });

    };
};

startUp();