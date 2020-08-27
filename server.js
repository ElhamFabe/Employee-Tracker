const mysql = require('mysql');
const { prompt } = require('inquirer');
const logo = require('asciiart-logo');
const { inherits } = require('util');
const { async } = require('rxjs');
const db = require('./db')
const cTable = require('console.table');
const { start } = require('repl');
const { title } = require('process');

init();

// Display logo text, load start prompt 
function init() {
    // const employeeText = employeeText({ name: "Welcome to Employee Manager" }).render();
    // console.log("logo Text", logoText);
    // add color to employeeText
    //chalk?
    const longText = 'Welcome to Employee Manager';
 
console.log(
    logo({
        name: 'Welcome to Employee Manager',
        font: 'ANSI Shadow',
        lineChars: 10,
        padding: 2,
        margin: 3,
        borderColor: 'bold-magenta',
        logoColor: 'bold-cyan',
        textColor: 'yellow',
    })
    .emptyLine()
    .emptyLine()
    .center(longText)
    .render()
);

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
    const departments = await db.findAllDepartments();
    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const department = await prompt ([
        {
            name: 'name',
            message: 'What department would you like to  '
        }
    ])
    await db.createDepartment(department);
    startPrompt();
}
// async function addRole() {
//     const departments = await db.findAllDepartments();
//     startPrompt();
// }
async function addEmployee() {
    const employees = await db.findAllEmployees();
    // console.log(employees);
    const role = await db.findAllRole();
    // console.log(role);
    const managerChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name}, ${last_name}`,
        value: id
    }));
    const roleChoices = role.map(({ id, title})=>
    ({
        name: title,
        value: id
    }));
    console.log(roleChoices);
    const employee = await prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Employee first name:'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Employee last name:'
        },
        {
            type: "list",
            name: 'role_id',
            message: 'Employee role:',
            choices: roleChoices
        },
        {
            type: "list",
            name: "manager_id",
            messsage: "Select employee that the manager",
            choices: managerChoices
        },
    ])
    await db.createEmployee(employee);
    // console.log("===================");
    console.log(addEmployee);
    startPrompt();
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
    // console.log("===================");
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

    const employees = await db.findAllEmployeesByDepartment(departmentId);
    console.table(employees)
    startPrompt();
}
async function viewEmployeesByManager() {
    const departments = await db.findAllDepartments();
    // const departmentChoices = departments.map(({ id, name }) => ({
    //     name: name,
    //     value: id
    // }));

}
async function viewRoles() {
    const roles = await db.findAllRole();
    console.table(roles);
    console.log("===================");
    startPrompt();
}
async function viewEmployees() {
    const employeeView = await db.findAllEmployees();
    console.table(employeeView);
    console.log("===================");
    startPrompt();
}


//update employee roles, employee managers



//delete departments, roles, employees
async function removeEmployee () {
    const revEmployee = await db.findAllEmployees ();
    const employeeChoices = revEmployee.map(({ id, title }) => ({
        name: title,
        value: id
    }));
    const { employeeId } = await prompt ([
        {
            type: 'list',
            name: 'employeedId', 
            message: 'Delete employee',
            choices: employeeChoices
        }
    ]);
    await db.deleteEmployee(employeeId);
}


function quit() {
    process.exit(0);
}

startPrompt()

