const { default: test } = require('node:test')
const Employee = require('../lib/Employee')

test('can create an employee object', () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe('object')
});

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