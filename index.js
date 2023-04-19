const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
  
    port: 3306,
  
    user: 'root',
  
    password: '',
    database: 'employee_trackerdb',
  });
  
  connection.connect((err) => {
    if (err) throw err;
    menu();
  });

const menu = () => {
    inquirer
        .prompt({
            name: 'options',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'View All Employees',
                'Add Employee',
                'Quit',
            ],
        })
        .then((answer) => {
            switch (answer.action) {

                case 'View All Roles':
                    viewRoles();
                    break;

                case 'Add Role':
                    addRole();
                    break;

                case 'View All Departments':
                    viewDepo();
                    break;

                case 'Add Department':
                    addDepo();
                    break;

                case 'View All Employees':
                    veiwEmployees();
                    break;

                case 'Add Employee':
                    addEmployee();
                    break;

                case 'Update Employee Role':
                    updateRole();
                    break;

                case 'Quit':
                    connection.end();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        })
};

const viewRoles = () => {
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res);
        menu();
      });
};

const addRole = () => {
    
}