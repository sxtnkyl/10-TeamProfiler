const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

//can set and get github/role
test("Can set the github property and execute getGithub/Role methods", () => {
  const name = "testName";
  const id = "testId";
  const email = "testEmail";
  const github = "testGithub";
  const newEngineer = new Engineer(name, id, email, github);

  expect(newEngineer.github).toEqual(github);
  expect(newEngineer.getGithub()).toEqual(github);
  expect(newEngineer.getRole()).toEqual("Engineer");
});
