const Employee = require('../lib/Employee')

test ("Should create object", () => {
    const e = new Employee();
    expect (typeof(e)).toBe('object');
});

test ("Should be able to set name", () => {
    const name = "Anthony"
    const e = new Employee(name);
    expect (e.name).toBe(name);
});

test ("Should be able to set ID", () => {
    const testVal = 26;
    const e = new Employee("Foo", testVal);
    expect (e.id).toBe(testVal);
});

test ("Should be able to set email", () => {
    const testVal = "test@gmail.com";
    const e = new Employee("Foo", 3, testVal);
    expect (e.email).toBe(testVal);
});

test ("Should be able to get name via getName()", () => {
    const testVal = "Tony";
    const e = new Employee(testVal);
    expect (e.getName()).toBe(testVal);
});

test ("Should be able to get id via getId()", () => {
    const testVal = "27";
    const e = new Employee("Foo", testVal);
    expect (e.getId()).toBe(testVal);
});

test ("Should be able to get email via getEmail()", () => {
    const testVal = "testing@testmail.com";
    const e = new Employee("Foo", 1, testVal);
    expect (e.getEmail()).toBe(testVal);
});

test ("getRole() function should return Employee", () => {
    const testVal = "Employee";
    const e = new Employee("Barbara", 1, "testing@testmail.com");
    expect (e.getRole()).toBe(testVal);
});