const util = require ('util');
const mysql =require ('mysql');
// const { zip } = require('rxjs');

const connection = mysql.createConnection ({
    // host
    host: "localhost",

    // user
    user: "root",

    // password
    password: "process.env.MYSQL_KEY",
    
    // database
    database:"employees"
});

connection.connect();

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query); 

module.exports = connection;