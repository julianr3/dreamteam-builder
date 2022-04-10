const { test, expect } = require("@jest/globals")
const Intern = require("../lib/intern")

// property school
test("setting school for intern", () => {
    const testSchool = "UPenn";

    const newIntern = new Intern("","","",testSchool)

    expect(newIntern.school).toBe(testSchool)
})

// method getSchool
test("setting school for intern", () => {
    const testSchool = "UPenn";

    const newIntern = new Intern("","","",testSchool)

    expect(newIntern.getSchool()).toBe(testSchool)
})

// method getRole
test("setting role for intern", () => {
    const newIntern = new Intern("","","","")

    expect(newIntern.getRole()).toBe("Intern")
})