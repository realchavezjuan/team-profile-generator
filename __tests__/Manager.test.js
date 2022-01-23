const Manager = require('../lib/Manager.js');

test('create a manager', () => {
    const manager = new Manager('Juan', 1, 'juan@work.com', 10);
    console.log(manager);
    expect(manager.officeNumber).toBe(10);
})

test('return role', () => {
    const manager = new Manager('Juan', 1, 'juan@work.com', 10);
    expect(manager.getRole()).toBe('Manager');
    console.log(manager.getRole());
})