const Employee = require('../lib/Employee')

test('can create an employee object', () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe('object')
});

test('can create an engineer object', () => {
    const engineer = new Employee()
    expect(typeof(engineer)).toBe('object')
});

test('can create an intern object', () => {
    const intern = new Employee()
    expect(typeof(intern)).toBe('object')
})

test('can create a manager object', () => {
    const manager = new Employee()
    expect(typeof(manager)).toBe('object')
})

test('can set name via constructor args', () => {
    const name = 'Tim'
    const employee = new Employee()
    expect(employee.name).toBe(name)
});

test('can set id via constructor args', () => {
    const id = '1'
    const employee = new Employee()
    expect(employee.id).toBe(id)
});

test('can set email via constructor args', () => {
    const email = 'testing@gmail.com'
    const employee = new Employee()
    expect(employee.email).toBe(email)
});

test('can get name via getName()', () => {
    const name = 'Tim'
    const employee = new Employee()
    expect(employee.getName()).toBe(name)
});

test('can get id via getId()', () => {
    const id = 1
    const employee = new Employee()
    expect(employee.getId()).toBe(id)
});

test('can get email via getEmail()', () => {
    const email = 'testing@gmail.com'
    const employee = new Employee()
    expect(employee.getEmail()).toBe(email)
});
