// Dependencies
const express = require('express');
const mysql = require('mysql');
const inquirer = require('inquirer');

const app = express();
const PORT = process.env.PORT || 8080;
//console.log(process.env.DB_PASSWORD);

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_db',
});

connection.connect((err) => {
    if (err) throw err;
    start();
});

const start = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update employee role",
                "View all roles",
                "View all employees",
                "View all departments",
                "Exit",
            ],

        }).then((answer) => {
            switch (answer.action) {
                case "Add a department":
                    departmentAdd();
                    break;

                case "Add a role":
                    roleAdd();
                    break;

                case "Add an employee":
                    employeeAdd();
                    break;

                case "Update employee role":
                    updateRole();
                    break;

                case "View all roles":
                    roleSearch();
                    break;

                case "View all employees":
                    employeeSearch();
                    break;

                case "View all departments":
                    departmentSearch();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }

        });
};

// Question to add a department
const departmentAdd = () => {
    inquirer
        .prompt({
            name: 'department',
            type: 'input',
            message: 'What is the department you would like to add?',
        })
        .then((answer) => {
            console.log(`You added department "${answer.department}`);
            let query = 'INSERT INTO department (name) VALUES  ( ? )';
            connection.query(query, answer.department, (err, res) => {
                if (err) throw err;

                start();
            });
        })

};
// Question to a role
const roleAdd = () => {
    inquirer
        .prompt({
            name: 'title',
            type: 'input',
            message: 'What employee role would like to add?',
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What would be the salary of the new employee role?',
        },
        {
            name: 'department_id',
            type: 'list',
            message: 'What would be the salary of the new employee role?',
            choices: ['IT', 'Sales', 'Marketing', 'R & D'],
        })
        .then((answer) => {
            console.log(`You added the role of a "${answer.title}"`);
            //let query = 'INSERT INTO role SET ? (title: , salary, department_id)';
            connection.query('INSERT INTO role SET ?' [${answer.title}, ${answer.salary}, ${answer.department_id}], (err, res) => {
                if (err) throw err;

                start();
            });
        })

};