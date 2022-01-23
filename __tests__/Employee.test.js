const Employee = require('../lib/Employee.js');

test('creates an employee', () => {
    const employee = new Employee('Juan', 1, 'juan@work.com');
    console.log(employee);
    expect(employee.name).toBe('Juan');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('juan@work.com');

});

test('return name', () => {
    const employee = new Employee('Juan', 1, 'juan@work.com');
    expect(employee.getName()).toBe(employee.name);
});

test('returns id', () => {
    const employee = new Employee('Juan', 1, 'juan@work.com');
    expect(employee.getId()).toBe(employee.id);
});

test('returns email', () => {
    const employee = new Employee('Juan', 1, 'juan@work.com');
    expect(employee.getEmail()).toBe(employee.email);
});

test('returns role', () => {
    const employee = new Employee('Juan', 1, 'juan@work.com');
    expect(employee.getRole()).toBe('Employee');
});
    
