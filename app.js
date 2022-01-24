const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// const promptUser = () => {

//     console.log(`
//     ======================
//     Let's Build Your Team!
//     ======================
//     `);

//     // prompt for the manager
//     inquirer.prompt([
//         {
//             type: 'text',
//             name: 'name',
//             message: 'What is the managers name?'
//         },
//         {
//             type: 'text',
//             name: 'id',
//             message: 'What is their id?'
//         },
//         {
//             type: 'text',
//             name: 'email',
//             message: 'What is their email?'
//         },
//         {
//             type: 'list',
//             name: 'office',
//             message: 'What number is their office room?',
//             choices: ['Room 101', 'Room 210', 'Room 300']
//         }
//     ])
//     .then(data => {
//         const manager = new Manager(data.name, data.id, data.email, data.office);
//         console.log(manager.getRole());

//         // Prompt for Engineers
//         inquirer.prompt([
//             {
//                 type: 'text',
//                 name: 'name',
//                 message: 'What is the engineers name?'
//             },
//             {
//                 type: 'text',
//                 name: 'id',
//                 message: 'What is their id?'
//             },
//             {
//                 type: 'text',
//                 name: 'email',
//                 message: 'What is their email?'
//             },
//             {
//                 type: 'text',
//                 name: 'office',
//                 message: 'What number is their GitHub username?'
//             }
//         ])
//         .then(data => {
//             const engineer = new Engineer(data.name, data.id, data.email, data.github);
//             inquirer.prompt(
//                 {
//                     type: 'confirm',
//                     name: 'add',
//                     message: 'Is there another engineer on the team?',
//                     default: false
//                 }
//             )
//             .then(data){
//                 if (data){

//                 }
//             }


//             // prompt for the interns
//             inquirer.prompt([
//                 {
//                     type: 'text',
//                     name: 'name',
//                     message: 'What is the interns name?'
//                 },
//                 {
//                     type: 'text',
//                     name: 'id',
//                     message: 'What is their id?'
//                 },
//                 {
//                     type: 'text',
//                     name: 'email',
//                     message: 'What is their email?'
//                 },
//                 {
//                     type: 'list',
//                     name: 'office',
//                     message: 'What number is their schools name?',
//                     choices: ['University of Oregon', 'Oregon State University']
//                 }
//             ])
//             .then(data => {
//                 const intern = new Intern(data.name, data.id, data.email, data.office);
//                 console.log(intern.getRole());
//             });
//         })
//     })
// };

function initialPrompt () {

    console.log(`
    ======================
    Let's Build Your Team!
    ======================
    `);

    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the managers name?'
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
            type: 'list',
            name: 'office',
            message: 'What number is their office room?',
            choices: ['Room 101', 'Room 210', 'Room 300']
        }
    ])
    .then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.office);
        console.log(manager.getRole());
        engineersPrompt();
    });
}

function engineersPrompt () {

    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the engineers name?'
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
            type: 'text',
            name: 'office',
            message: 'What number is their GitHub username?'
        }
    ])
    .then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        console.log(engineer.getRole());
        inquirer.prompt(
            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Is there another engineer in your team?'
            }
        )
        .then(data => {
            // if answer is yes to previous question, repeat the prompt
            if (data.confirmAdd){
                engineersPrompt();
            }
            else{
                internPrompt();
            }
        })
    });
}

function internPrompt () {

    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the interns name?'
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
            type: 'list',
            name: 'school',
            message: 'What number is their schools name?',
            choices: ['University of Oregon', 'Oregon State University']
        }
    ])
    .then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        console.log(intern.getRole());
        inquirer.prompt(
            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Is there another intern in your team?'
            }
        )
        .then(data => {
            // if answer is yes to previous question, repeat the prompt
            if (data.confirmAdd){
                internPrompt();
            }
        })
    });
}

initialPrompt();
