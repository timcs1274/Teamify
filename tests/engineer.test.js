const Engineer = require('../lib/Engineer')

test('can set github username via getGithub', () => {
    const userName = 'timcs1274'
    const engineer = new Engineer()
    expect(engineer.getGithub()).toBe(userName)
})

test('can assign role via getRole()', () => {
    const role = 'engineer'
    const engineer = new Engineer()
    expect(engineer.getRole()).toBe(role) 
})