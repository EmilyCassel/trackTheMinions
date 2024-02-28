const inquirer = require("inquirer")
const queries = require("./queries")

function startTracking() {
    inquirer.prompt([
        {

            type: "list",
            name: "option",
            message: "Pick an option below to continue",
            choices: ["All Roles", "All Departments", "All Employees", "Add a Department", "Add a Role", "Add an Employee"]
        }
    ])
        .then((answers) => {
            switch (answers.option) {
                case "All Roles":
                    queries.allRoles()
                        .then((roles) => {

                        }).catch((err) => {
                            console.error("Error: Cannot add full fill request", err)
                        })
                    break;

                case "All Departments":
                    queries.allDepartments()
                        .then((departments) => {

                        }).catch((err) => {
                            console.error("Error: Cannot add full fill request", err)
                        })
                    break;

                case "All Employees":
                    queries.allEmployees()
                        .then((employees) => {

                        }).catch((err) => {
                            console.error("Error: Cannot add full fill request", err)
                        })
                    break;

                case "Add a Department":
                    addDepartment();
                    break;

                case "Add a Role":
                    addRole();
                    break;

                case "Add an Employee":
                    newEmployee();
                    break;

                default:
                    console.log("Invalid option");
            }
        })

}
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "nameDepartment",
            message: "Enter the name of the department you want to add:"
        }
    ])
        .then((answers) => {
            const nameDepartment = answers.nameDepartment;
            queries.addDepartment(nameDepartment)
                .then((departmentId) => {
                    console.log(`Department ${nameDepartment} added with ID of ${departmentId}`)
                }).catch((err) => {
                    console.error("Error: Cannot add department", err)
                })
        })
}



function newRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "newRole",
            message: "Enter the new role:"
        }
    ]).then((answers) => {
        const newRole = answers.newRole;
        queries.newRole(newRole)
            .then((roleId) => {
                console.log(`Role ${newRole} added with ID of ${roleId}`)
            }).catch((err) => {
                console.error("Error: Cannot add role", err)
            })
    })
}

function newEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "newEmployee",
            message: "Enter the name of new employee:"
        }
    ])
        .then((answers) => {
            const newEmployee = answers.newEmployee;
            queries.newEmployee(newEmployee)
                .then((newEmployeeId) => {
                    console.log(`Employee ${newEmployee} added with ID of ${newEmployeeId}`)
                }).catch((err) => {
                    console.error("Error: Cannot add employee", err)
                })
        })
}


startTracking();

