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
})
