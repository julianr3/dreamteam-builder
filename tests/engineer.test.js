const { test, expect } = require("@jest/globals")
const Engineer = require("../lib/engineer")

test("setting github for for engineer", () => {
    const testGithub = "julianr3";

    const newEngineer = new Engineer("","","",testGithub)

    expect(newEngineer.github).toBe(testGithub)
})
// method getSchool
test("setting github for engineer", () => {
    const testGithub = "julianr3";

    const newEngineer = new Engineer("","","",testGithub)

    expect(newEngineer.getGithub()).toBe(testGithub)
})

// method getRole
test("setting role for engineer", () => {
    const newEngineer = new Engineer("","","","")

    expect(newEngineer.getRole()).toBe("Engineer")
})