const Engineer = require('../lib/Engineer.js');

test('create a engineer', () => {
    const engineer = new Engineer('Juan', 1, 'juan@work.com', 'juan3001');
    console.log(engineer);
    expect(engineer.gitHub).toBe('juan3001');
});

test('return role', () => {
    const engineer = new Engineer('Juan', 1, 'juan@work.com', 'juan3001');
    expect(engineer.getRole()).toBe('Engineer');
    console.log(engineer.getRole());
});