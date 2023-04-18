DROP DATABASE IF EXISTS employ_boydb;
CREATE database employ_boydb;

USE employ_boydb;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  title VARCHAR(30) NULL,
  department VARCHAR(30) NULL,
  salary VARCHAR(30) NULL
  PRIMARY KEY (id)
);