const Manager = require("../lib/Manager");

//can set and get office number/role
test("Can set the office number property and execute getOfficeNumber/Role methods", () => {
  const name, id, email, officeNumber;
  name = "testName";
  id = "testId";
  email = "testEmail";
  officeNumber = "testOfficeNumber";
  const newManager = new Manager(name, id, email, officeNumber);

  expect(newManager.officeNumber).toEqual(officeNumber)
  expect(newManager.getOfficeNumber()).toEqual(officeNumber)
  expect(newManager.getRole()).toEqual("Manager")
});
