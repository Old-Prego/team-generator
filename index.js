const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager")

const employees = [];

function init() {
    console.log("Initializing...");
    beginPage();
    newEmployee();
}


function newEmployee() {
    inquirer.prompt([
    {
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "list",
        message: "What role will this employee have?",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "What is the employee's ID?",
        name: "id"
    },
    {
        message: "What is the employee's email address?",
        name: "email"
    }])
    .then(function({name, role, id, email})
    {
        let addInfo = "";
        if (role === "Manager"){
            addInfo = "office phone number";
        } else if (role === "Engineer"){
            addInfo = "GitHub username";
        } else {
            addInfo = "school name";
        }
        inquirer.prompt([{
            message: `What is the employee's ${addInfo}?`,
            name: "addInfo"
        },
        {
            type: "list",
            message: "Would you like to add more employees to this team?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreEmployees"
        }])
        .then(function({addInfo, moreEmployees})
        {
            let newEmployee;
            if (role === "Manager"){
                newEmployee = new Manager(name, id, email, addInfo);
            } else if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, addInfo);
            } else {
                newEmployee = new Intern(name, id, email, addInfo);
            }
            employees.push(newEmployee);
            addCard(newEmployee)
            .then(function() {
                if (moreEmployees === "yes") {
                    newEmployee();
                } else {
                    endPage();
                }
            });
        });
    });
}

function beginPage()
{
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
        <title>Company Profile Manager</title>
    </head>
    <body>
        <nav class="navbar mb-5">
            <span class="navbar-brand w-100 text-center">Company Profile Manager</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./company.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function addCard(employee){
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getID();
        const email = employee.getEmail();
        let card = "";
        if (role === "Manager") {
            const officePhone = employee.getPhone();
            card = `<div class="col-4>
            <div class="card mx-auto">
                <h4 class="card-header">${name}</h4>
                <h4 class="card-header">Manager</h4>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">Office Phone: ${officePhone}</li>
                </ul>
            </div>
        </div>`
        } else if (role === "Engineer") {
            const gitHub = employee.getGithub();
            card = `<div class="col-4>
            <div class="card mx-auto">
                <h4 class="card-header">${name}</h4>
                <h4 class="card-header">Engineer</h4>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">GitHub: ${gitHub}</li>
                </ul>
            </div>
        </div>`
        } else {
            const school = employee.getSchool();
            card = `<div class="col-4>
            <div class="card mx-auto">
                <h4 class="card-header">${name}</h4>
                <h4 class="card-header">Intern</h4>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>`
        }
        console.log("Adding card to HTML file");
        fs.appendFile("./company.html", card, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function endPage() {
    const html = `</div>
    </div>
</body>
</html>`;

    fs.appendFile("./company.html", html, function(err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("HTML file is ready for review!");
}

init();