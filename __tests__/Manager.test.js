const Manager = require('../lib/Manager.js');

test('create a manager', () => {
    const manager = new Manager('Juan', 1, 'juan@work.com', 1);
    console.log(manager);
    expect(manager.office).toBe(1);
})

test('return role', () => {
    const manager = new Manager('Juan', 1, 'juan@work.com', 1);
    expect(manager.getRole()).toBe('Manager');
    console.log(manager.getRole());
})