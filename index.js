// var mysql = require("mysql");
const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const { inherits } = require("util");
const { async } = require("rxjs");
const conTable = require("console.table");
require('dotenv').config()
console.log(process.env);


const db = require('./db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});


