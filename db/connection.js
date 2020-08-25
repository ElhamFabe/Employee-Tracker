const util = require ('util');
const mysql =require ('mysql');

 require  ('dotenv').config();
console.log(process.env)

// create connection information for sql databaase
const connection = mysql.createConnection ({
    // host
    host: process.env.DB_HOST,

    // Port
    Port: 3306,
    // user
    user: process.env.DB_USER,

    // password
    password: process.env.DB_KEY,
    
    // database
    database:"employees"
});

connection.connect((err) => {
    if (err) throw err;
    console.log ('Employee Tracker');
});

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query); 

module.exports = connection;