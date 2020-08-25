-- Drops the employees if it exists currently --
DROP DATABASE IF EXISTS employees_db;

-- Creates the "employees" database --
CREATE DATABASE employees_db;

-- Makes it so all of the following code will affect employees --
USE employees_db;

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

 CREATE TABLE role (
     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(30) UNIQUE NOT NULL,
     salary DECIMAL UNSIGNED NOT NULL,
     department_id INT UNSIGNED NOT NULL,
     INDEX dep_ind (department_id),
     CONSTRAINT fk_department foreign key (department_id) REFERENCES department(id) ON DELETE CASCADE
 );

 CREATE TABLE employee (
     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     role_id INT UNSIGNED NOT NULL,
     INDEX role_ind (role_id),
      CONSTRAINT fk_role foreign key (role_id) REFERENCES role(id)  ON DELETE CASCADE,
     manager_id INT UNSIGNED,
     INDEX man_ind (manager_id),
      CONSTRAINT fk_manager foreign key (manager_id) REFERENCES employee(id) ON DELETE SET NULL
    --  foriegn key manager_id is referencing employee id 
 );

