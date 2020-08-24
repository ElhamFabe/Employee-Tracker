const mysql =require ('mysql');

const connection = mysql.createConnection ({
    // host
    host: "localhost",

    // port
    port: 3306,

    // user
    user: "root",

    // password
    passwor: "password",

});

connection.connect(function (err){
    if (err) throw err;
    console.log("connect")

});
module.exports = connection;