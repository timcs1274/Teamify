const Engineer = require('../lib/Engineer')

test('can set github username via getGithub', () => {
    const userName = 'timcs1274'
    const engineer = new Engineer('Tim', 1 , 'testing@gmail.com', 'timcs1274')
    expect(engineer.getGithub()).toBe(userName)
})

test('can assign role via getRole()', () => {
    const role = 'Engineer'
    const engineer = new Engineer()
    expect(engineer.getRole()).toBe(role) 
})