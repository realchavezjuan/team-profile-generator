const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const promptUser = () => {
    console.log(`
    ======================
    Team Profile Generator
    ======================
    `);

    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the name of this employee?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is their id?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is their email?'
        },
        {
            type: 'checkbox',
            name: 'role',
            message: 'What is their role?',
            choices: ['Manager', 'Engineer', 'Intern'],
        }
    ])
    .then(data => {

        console.log(data);

        const employee = new Employee(data.name, data.id, data.email );
        console.log(employee);
    });
};

promptUser();