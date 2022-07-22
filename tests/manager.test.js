const Manager = require('../lib/Manager')

test('can get office number via getOffice()', () => {
    const officeNum = 101
    const manager = new Manager('Tim', 1 , 'testing@gmail.com', 101)
    expect(manager.getOffice()).toBe(officeNum)
})

test('can assign role via getRole()', () => {
    const role = 'Manager'
    const manager = new Manager()
    expect(manager.getRole()).toBe(role)
})