const inquirer = require('inquirer')
const fs = require('fs')

const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

const team = [];

function questions() {

    inquirer.prompt([

        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter manager's email address"
        },
    ])

}
