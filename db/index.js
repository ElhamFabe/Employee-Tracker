const connection = require('./connection');

class dataB {
    constructor(connection) {
        this.connection = connection;
    }
    
    findAllDepartments() {
        //missing SQL joins
        return this.connection.query("SELECT department.id, department.name FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name");
    }
    findAllEmployees() {
        //missing SQL joins & manager
        return this.connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT (manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id");
    }
    findAllRole() {
        //missing SQL joins
        return this.connection.query("SELECT role.id, role.title,role.salary FROM role LEFT JOIN department on role.department_id = department.id");
    }

    //create employee department role

    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
       
    }
    createDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department);
    }
    createRole(role) {
        return this.connection.query("INSERT INTO role SET ?",role);
    }

    //delete department roles and employee
    deleteEmployee(employeeId){
        return this.connection.query(`DELETE FROM employee WHERE id=${employeeId}`);
    }
    deleteRole(roleId){
        return this.connection.query (`DELETE FROM role WHERE id=${roleId}`);
    }
    deleteDeparment(departmentId){
        return this.connection.query (`DELETE FROM department WHERE id=${departmentId}`);
    }
}

module.exports = new dataB(connection);