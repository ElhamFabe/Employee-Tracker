const connection = require ('./connection');

class dataB {
    constructor(connection) {
        this.connection = connection;    
    }
    findAllDepartments() {
        //missing SQL joins
        return this.connection.query("SELECT department.id, department.name");
    }
    findAllEmployees(){
         //missing SQL joins & manager
        return  this.connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name FROM");
    }
    findAllRole ()  {
         //missing SQL joins
         return this.connection.query("SELECT role.id, role.title,role.salary FROM role")
    }
    addEmployee (employee) {
        //
        return this.connection.query("INSERT INTO employee SET ?")
   }
   add{

   }

    }
