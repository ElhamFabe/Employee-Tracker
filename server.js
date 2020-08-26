const mysql = require('mysql');
const { prompt } = require('inquirer');
const logo = require('asciiart-logo');
const { inherits } = require('util');
const { async } = require('rxjs');
const db = require('./db')
const cTable = require('console.table');

init();

// Display logo text, load start prompt 
function init() {
    const logoText = logo({ name: "Employee Manager" }).render();
    console.log("logo Text", logoText);
    loadstartPrompt();
}

// create async function for prompt and choice
async function startPrompt() {
    const { choice } = await
        prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Main Menu',
                choices: [
                    {
                        name: "View all employees",
                        value: "VIEW_EMPLOYEES"
                    },
                    {
                        name: "View all employees by department",
                        value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                    },
                    {
                        name: "View all employees by manager",
                        value: "VIEW_EMPLOYEES_BY_MANAGER"
                    },
                    {
                        name: "Add employee",
                        value: "ADD_EMPLOYEE"
                    },
                    {
                        name: "Remove employee",
                        value: "REMOVE_EMPLOYEE"
                    },
                    {
                        name: "Update employee role",
                        value: "UPDATE_EMPLOYEE_ROLE"
                    },
                    {
                        name: "Update employee manager",
                        value: "UPDATE_EMPLOYEE_MANAGER"
                    },
                    {
                        name: "View all roles",
                        value: "VIEW_ROLES"
                    },
                    {
                        name: "Add role",
                        value: "ADD_ROLE"
                    },
                    {
                        name: "Remove role",
                        value: "REMOVE_ROLE"
                    },
                    {
                        name: "View all departments",
                        value: "VIEW_DEPARTMENTS"
                    },
                    {
                        name: "Add department",
                        value: "ADD_DEPARTMENT"
                    },
                    {
                        name: "Remove department",
                        value: "REMOVE_DEPARTMENTS"
                    },
                    {
                        name: "Quit",
                        value: "QUIT"
                    }
                ]
            }


        ]);
    // call functions based on user choice
    switch (choice) {
        case "VIEW_EMPLOYEES":
            return viewEmployees();
        case "VIEW_EMPLOYEES_BY_DEPARTMENT":
            return viewEmployeesByDepartment();
        case "VIEW_EMPLOYEES_BY_MANAGER":
            return viewEmployeesByManager();
        case "ADD_EMPLOYEE":
            return addEmployee();
        case "REMOVE_EMPLOYEE":
            return removeEmployee();
        case "UPDATE_EMPLOYEE_ROLE":
            return updateEmployeeRole();
        case "VIEW_DEPARTMENT":
            return viewDepartments();
        case "ADD_DEPARTMENT":
            return addDepartment();
        case "REMOVE_DEPARTMENT":
            return removeDepartment();
        case "VIEW_ROLES":
            return viewRoles();
        case "ADD_ROLES":
            return addRole();
        case "REMOVE_ROLES":
            return removeRole();
        default:
            return quit();
    }
}
//add departments, roles and employees
async function addDepartment() {
    const
}
async function addRole() {
    const 
}
async function addEmployee() {
    const
}

// view departments, roles, employees and employee by managers

// async function viewEmployees() {
//     const employees = await db.findAllEmployees();
//     console.table(employees);

//     loadstartPrompt();
// }

async function viewEmployeesByDepartment() {
    const departments = await db.findAllDepartments();
    console.table(departments);
    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
    }));

    const { departmentId } = await prompt([
        {
            type: "list",
            name: "departments",
            messsage: "Select the department to see employees",
            choices: departmentChoices
        }
    ]);

    const employees = await db.findAllEmployees(departmentId);
    console.log(employees)
}
async function viewAllRole () {
    const roles = await db.findAllRole();
    console.table(roles);
}
async function viewAllEmployees () {
    const employee = await db.findAllRole();
    console.table(employee);
}


//update employee roles, employee managers



//delete departments, roles, employees
async function 

loadstartPrompt();

