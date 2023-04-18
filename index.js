const mysql = require('mysql');
const inquirer = require('inquirer');
const Sequelize = require('sequelize');

const PORT = process.env.PORT || 3001;

const sequelize = new Sequelize(
    'employ_boydb',
    'root',
    process.env.SECRET_KEY,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;

menu();

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
                case 'Update Employee Role':
                    updateRole();
                    break;

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

                case 'Quit':
                    connection.end();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        })
};