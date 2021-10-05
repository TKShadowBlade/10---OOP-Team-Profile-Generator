const Engineer = require('../lib/Engineer')

test ('Can input Github info', () => {
    const testVal = 'Githubinfo'
    const e = new Engineer ('Foo', 3, 'test@testmail.com', testVal);
    expect(e.github).toBe(testVal);
});

test ('getRole() should return "Engineer"', () => {
    const testVal = 'Engineer'
    const e = new Engineer ('Foo', 3, 'test@testmail.com', testVal);
    expect(e.getRole()).toBe(testVal);
});

test ('getGithub() should grab Github info', () => {
    const testVal = 'Githubinfo'
    const e = new Engineer ('Foo', 3, 'test@testmail.com', testVal);
    expect(e.getGithub()).toBe(testVal);
});