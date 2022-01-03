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

  }

  function makeNewTeam() {

    inquirer
        .prompt([
            {
                name: "chooseMember",
                type: "list",
                message: "Choose a team member to add:",
                choices: [
                    "Engineer",
                    "Intern",
                    "No more team members needed"
                ]
            }
        ]).then(picked => {
            switch (picked.chooseMember) {
               case "Engineer":
                   addEngineer();
                   break;
               case "Intern":
                   addIntern();
                   break;
               default:
                   putTogetherTeam(); 
            }
        });
  }

  function addEngineer() {
      inquirer
        .prompt([
            {
                name: "engineerName",
                type: "input",
                message: "Enter the name of engineer",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "At least one character required"
                }
            },
            {
                name: "engineerId",
                type: "input",
                message: "Enter the engineer's ID",
                validate: answer => {
                    const valid = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (valid) {
                        if (arrayIds.includes(answer)) {
                            return "This ID already in use, please select a new one";
                        } else {
                            return true;
                        }
                    }
                    return "ID must be greater than zero";
                }
            },
            {
                name: "engineerEmail",
                type: "input",
                message: "Enter the engineer's email address",
                validate: answer => {
                    const valid = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (valid) {
                        return true;
                    }
                    return "Email address invalid";
                }
            },
            {
                name: "engineerGithub",
                type: "input",
                message: "Enter the engineer's Github username",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "At least one character required";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            team.push(engineer);
            arrayIds.push(answers.engineerId);
            makeNewTeam();
        })
  }

  function addIntern() {
      inquirer
        .prompt([
            {
                name: "internName",
                type: "input",
                message: "Enter the name of intern",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "At least one character required"
                }
            },
            {
                name: "internId",
                type: "input",
                message: "Enter the intern's ID",
                validate: answer => {
                    const valid = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (valid) {
                        if (arrayIds.includes(answer)) {
                            return "This ID already in use, please select a new one";
                        } else {
                            return true;
                        }
                    }
                    return "ID must be greater than zero";
                }
            },
            {
                name: "internEmail",
                type: "input",
                message: "Enter the intern's email address",
                validate: answer => {
                    const valid = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (valid) {
                        return true;
                    }
                    return "Email address invalid";
                }
            },
            {
                name: "internSchool",
                type: "input",
                message: "Enter the name of the intern's school",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "At least one character required";
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            team.push(intern);
            arrayIds.push(answers.internId);
            makeNewTeam();
        });
  }

  function putTogetherTeam() {
      if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, render(team), "utf-8");
  }

  makeNewManager();
};

startUp();