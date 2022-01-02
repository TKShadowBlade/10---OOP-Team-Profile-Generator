const Intern = require('../lib/Intern')

test ("Can input school info", () => {
    const testVal = "LSU";
    const e = new Intern("Foo", 1, "testing@testmail.com", "LSU");
    expect (e.school).toBe(testVal);
});

test ('getRole() should return "Intern"', () => {
    const testVal = "Intern";
    const e = new Intern("Foo", 1, "testing@testmail.com", "LSU");
    expect (e.getRole()).toBe(testVal);
});

test ("Can get school info with getSchool()", () => {
    const testVal = "LSU";
    const e = new Intern("Foo", 1, "testing@testmail.com", "LSU");
    expect (e.getSchool()).toBe(testVal);
});