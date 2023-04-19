USE employ_boydb;

INSERT INTO employee (first_name, last_name, role_id, dept_id)
VALUES ('gram', 'lizard', 1), ('bill', 'dandy', 2), ('connie', 'ross', 3), ('ted', 'lasso', 4), ('beth', 'crud', 5);


INSERT INTO role (title, salary, dept_id)
VALUES ('cook', 45000, 1), ('server', 25000, 2), ('host', 35000, 2), ('custodian', 40000, 3), ('head chef', 50000, 1);


INSERT INTO department (dept_name)
VALUES ('kitchen'), ('FOH (front of house)'), ('sanitation');