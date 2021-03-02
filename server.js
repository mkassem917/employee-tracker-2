// Dependencies
const express = require('express');
const mysql = require('mysql');
const inquirer = require('inquirer');

const app = express();
const PORT = process.env.PORT || 3000;
//console.log(process.env.DB_PASSWORD);

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    password: process.env.DB_PASSWORD,
    database: 'employee_db',
});

connection.connect((err) => {
    if (err) throw err;
    runSearch();
});

const runSearch = () => {
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