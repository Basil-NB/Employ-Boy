DROP DATABASE IF EXISTS employ_boydb;
CREATE database employ_boydb;

USE employ_boydb;

CREATE TABLE employee (
   employee_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  PRIMARY KEY (employee_id)
);

CREATE TABLE role (
  role_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(8,2) NULL,
  dept_id INT NOT NULL,
  PRIMARY KEY (role_id)
);

CREATE TABLE department (
  dept_id INT NOT NULL AUTO_INCREMENT,
  dept_name VARCHAR(30) NULL,
  PRIMARY KEY (dept_id)
);