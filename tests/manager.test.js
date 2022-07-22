const Manager = require('../lib/Manager')

test('can get office number via getOffice()', () => {
    const officeNum = 101
    const manager = new Manager()
    expect(manager.getOffice()).toBe(officeNum)
})

test('can assign role via getRole()', () => {
    const role = 'manager'
    const manager = new Manager()
    expect(manager.getRole()).toBe(role)
})