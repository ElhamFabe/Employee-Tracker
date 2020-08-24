var mysql = require('mysql');
var inquirer = require('inquirer');
const conTable = require ('console.table');
const Denv = require('dotenv').config();


// create the connection information for the sql database
const db = require('db')

db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});