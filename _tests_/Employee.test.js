const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

//can make new instance
test("Can use Employee to make a new Employee instance", () => {
  const newEmployee = new Employee;
  expect(newEmployee).toEqual(Employee)
});
//can set name, id, email
test("Can set the class properties name, id, and email", () => {
  const name, id, email;
  name = "testName";
  id = "testId";
  email = "testEmail";
  const newEmployee = new Employee(name, id, email)

  expect(newEmployee.name).toEqual(name);
  expect(newEmployee.id).toEqual(id);
  expect(newEmployee.email).toEqual(email);
});

//can get name, id, email
test("Can use the getName/Id/Email methods", () => {
  const name, id, email;
  name = "testName";
  id = "testId";
  email = "testEmail";
  const newEmployee = new Employee(name, id, email)

  expect(newEmployee.getName()).toEqual(name);
  expect(newEmployee.getId()).toEqual(id);
  expect(newEmployee.getEmail()).toEqual(email);
});
//can execute getRole
test("Can use the getRole method", () => {
  const role = "Employee";
  const newEmployee = new Employee;
  expect(newEmployee.getRole()).toEqual(role)
});
