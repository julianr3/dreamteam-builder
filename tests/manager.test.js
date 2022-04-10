const { test, expect } = require("@jest/globals")
const Manager = require("../lib/manager")

test("setting office number for for manager", () => {
    const testOfficeNum = "3";

    const newManager = new Manager("","","",testOfficeNum)

    expect(newManager.officeNum).toBe(testOfficeNum)
})
// method getSchool
test("setting office number for manager", () => {
    const testOfficeNum = "3";

    const newManager = new Manager("","","",testOfficeNum)

    expect(newManager.getOfficeNum()).toBe(testOfficeNum)
})

// method getRole
test("setting role for manager", () => {
    const newManager = new Manager("","","","")

    expect(newManager.getRole()).toBe("Manager")
})