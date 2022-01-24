const createManagerCard = (manager) => {
    return `<section class="manager-card">
            <h2>${manager.name}</h2>
            <h3>Manager</h3>
            <h4>Id: ${manager.id}</h4>
            <h4>Email: ${manager.email}</h4>
            <h4>Office Number: ${manager.office}</h4>
        </section>
    `;
}

function createEngineerCard (engineer) {
    return `<section class="manager-card">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
        <h4>Id: ${engineer.id}</h4>
        <h4>Email: ${engineer.email}</h4>
        <a href="https://github.com/${engineer.github}">${engineer.github}</a>
    </section>
`;
}
function createInternCard (intern) {
    return `<section class="manager-card">
        <h2>${intern.name}</h2>
        <h3>Intern</h3>
        <h4>Id: ${intern.id}</h4>
        <h4>Email: ${intern.email}</h4>
        <h4>School: ${intern.school}</h4>
    </section>
`;
}

module.exports = promptData => {
    const [manager, engineer, intern] = promptData;
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <link rel="stylesheet" href="../dist/style.css" /> 
    <title>Team Profile</title>
</head>
<body>
    <header>
        My Team
    </header>
    <main class="display-area">
        <section class="manager-card">
            <h2>Juan</h2>
            <h3>Manager</h3>
            <h4>Id: 1</h4>
            <h4>Email: juan@work.com</h4>
            <h4>Office Number: Room 210</h4>
        </section>
        ${createManagerCard(manager)}
        ${createEngineerCard(engineer)}
        ${createInternCard(intern)}
    </main>
</body>
</html>
`;
}