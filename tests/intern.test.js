const Intern = require('../lib/Intern')

test('can set school name via getSchool()', () => {
    const school = 'NYU'
    const intern = new Intern('Tim', 1 , 'testing@gmail.com', 'NYU')
    expect(intern.getSchool()).toBe(school)
})

test('can assign role via getRole()', () => {
    const role = 'Intern'
    const intern = new Intern()
    expect(intern.getRole()).toBe(role)
})