var engineersArray=[];
var internsArray=[];
const createManagerCard = (manager) => {
    return `<section class="manager-card">
            <h2>${manager.name}</h2>
            <h3>Manager</h3>
            <h4>Id: ${manager.id}</h4>
            <a href="mailto:${manager.email}">Email: ${manager.email}</a>
            <h4>Office Number: ${manager.office}</h4>
        </section>
    `;
}

const createEngineerCard = (engineersArray) => {
    let engineersHTML = '';
    for(let i = 0; i < engineersArray.length; i++) {
        let engineer = engineersArray[i];
        engineersHTML += `<section class="manager-card">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
            <h4>Id: ${engineer.id}</h4>
            <a href="mailto:${engineer.email}">Email: ${engineer.email}</a> <br> <br>
            <a href="https://github.com/${engineer.gitHub}">Github: ${engineer.gitHub}</a>
        </section>
        `;
    }
    return engineersHTML;
}
const createInternCard = (internsArray) => {
    let internsHTML = '';
    for (let i = 0; i < internsArray.length; i++) {
        let intern = internsArray[i];
        internsHTML += `<section class="manager-card">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
            <h4>Id: ${intern.id}</h4>
            <a href="mailto:${intern.email}">Email: ${intern.email}</a>
            <h4>School: ${intern.school}</h4>
        </section>
        `;
    }
    return internsHTML;
}

module.exports = employeesArray => {
    
    for (let i = 0; i < employeesArray.length; i++) {
        console.log(employeesArray[i]);
        var employee = employeesArray[i];
        if (employee.getRole()=== 'Manager'){
            var manager = employee;
        }
        if (employee.getRole()=== 'Engineer'){
            engineersArray.push(employee);
        }
        if (employee.getRole()=== 'Intern'){
            internsArray.push(employee);
        }
    }
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../dist/style.css" /> 
    <title>Team Profile</title>
</head>
<body>
    <header>
        My Team
    </header>
    <main class="display-area">
        ${createManagerCard(manager)}
        ${createEngineerCard(engineersArray)}
        ${createInternCard(internsArray)}
    </main>
</body>
</html>
`;
}