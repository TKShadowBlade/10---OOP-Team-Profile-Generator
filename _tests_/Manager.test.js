const Manager = require('../lib/Manager')

test ("Can use constructor to set office number", () => {
    const testVal = 25;
    const e = new Manager("Foo", 1, "testing@testmail.com", testVal);
    expect (e.officeNumber).toBe(testVal);
});

test ('Can return "Manager" from getrole() function', () => {
    const testVal = "Manager";
    const e = new Manager("Foo", 1, "testing@testmail.com", 25);
    expect (e.getRole()).toBe(testVal);
});

test ("getOffice() will return office number", () => {
    const testVal = 25;
    const e = new Manager("Foo", 1, "testing@testmail.com", testVal);
    expect (e.getOfficeNumber()).toBe(testVal);
});