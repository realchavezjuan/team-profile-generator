const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-site.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/page-template.js')
var employeeObjectArray = [];

const initialPrompt = ()=> {

    console.log(`
    ======================
    Let's Build Your Team!
    ======================
    `);

    return inquirer.prompt([
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
        console.log(manager);
        employeeObjectArray.push(manager);
        return employeeObjectArray;
    });
};

const engineersPrompt = () =>{

    return inquirer.prompt([
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
            name: 'github',
            message: 'What is their GitHub username?'
        },
    ])
    .then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        console.log(engineer);
        employeeObjectArray.push(engineer);
        return employeeObjectArray;
    })
    // .then({
    //     return inquirer.prompt(
    //         {
    //             type: 'confirm',
    //             name: 'confirmAdd',
    //             message: 'Is there another engineer in your team?'
    //         }
    //     )
    //     .then(data => {
    //         // if answer is yes to previous question, repeat the prompt
    //         if (data.confirmAdd){
    //             engineersPrompt();
    //         }
    //         return false;
    //     })
        
    // });
};

const internPrompt = () => {

    return inquirer.prompt([
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
        console.log(intern);
        employeeObjectArray.push(intern);
        return employeeObjectArray;
        // return inquirer.prompt(
        //     {
        //         type: 'confirm',
        //         name: 'confirmAdd',
        //         message: 'Is there another intern in your team?'
        //     }
        // )
        // .then(data => {
        //     // if answer is yes to previous question, repeat the prompt
        //     if (data.confirmAdd){
        //         internPrompt();
        //     }
        //     else{
        //         return employeeObjectArray;
        //     }
        // })
    });
}

function menuPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What do you want to do?',
            choices: ['Add an engineer', 'Add an intern', 'Submit my team profile']
        },
    ])
}

initialPrompt()
    .then(engineersPrompt)
    .then(internPrompt)
    .then(data => {return (generateHTML(data))})
    .then(htmlTemplate => {writeFile(htmlTemplate)})