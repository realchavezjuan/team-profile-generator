const Intern = require('../lib/Intern.js');

test('create a intern', () => {
    const intern = new Intern('Juan', 1, 'juan@work.com', 'UofO');
    console.log(intern);
    expect(intern.school).toBe('UofO');
})

test('return role', () => {
    const intern = new Intern('Juan', 1, 'juan@work.com', 'UofO');
    expect(intern.getRole()).toBe('Intern');
    console.log(intern.getRole());
})