const { expect, test } = require('@jest/globals');
const Employee = require('../lib/employee')

test("setting a name for employee", () => {
    // initializing test value
    const testName = "John";

    // actual test process
    const newEmployee = new Employee(testName, 1, "test@mail.com");

    // conclusion
    expect(newEmployee.name).toBe(testName)

})

test("setting id for employee", () => {
    const testId = "3"
    const newEmployee = new Employee("Julian",testId, "test@gmail.com");
    expect(newEmployee.id).toBe(testId)
})