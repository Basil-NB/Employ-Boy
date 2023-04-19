const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: 'Dmfalcon105$',
    database: 'employ_boydb',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!');
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
            switch (answer.options) {

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
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
        menu();
    });
};

const addRole = () => {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Enter the new role title:',
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Enter the new role salary:',
        },
        {
            name: 'department_id',
            type: 'input',
            message: 'Enter the department ID for the new role:',
        },
    ]).then((answer) => {
        const query = 'INSERT INTO role SET ?';
        const role = {
            title: answer.title,
            salary: answer.salary,
            dept_id: answer.department,
        };
        connection.query(query, role, (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} new role inserted!`);
            menu();
        });
    });
};

const viewDepo = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        menu();
    });
};

const addDepo = () => {
    inquirer.prompt([
        {
            name: 'department',
            type: 'input',
            message: 'Enter the new department:',
        }
    ]).then((answer) => {
        const query = 'INSERT INTO department SET ?';
        const department = {
            dept_name: answer.department,
        };
        connection.query(query, department, (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} new role inserted!`);
            menu();
        });
    });
};

const veiwEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        menu();
    });
};

const addEmployee = () => {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Enter employees first name:',
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Enter employees last name',
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Enter the role ID for the new employee:',
        },
    ]).then((answer) => {
        const query = 'INSERT INTO employee SET ?';
        const employee = {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
        };
        connection.query(query, employee, (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} new employee inserted!`);
            menu();
        });
    });
};