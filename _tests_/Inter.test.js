const Intern = require("../lib/Intern");

//can set and get school/role
test("Can set the school property and execute getSchool/Role methods", () => {
  const name = "testName";
  const id = "testId";
  const email = "testEmail";
  const school = "testSchool";
  const newIntern = new Intern(name, id, email, school);

  expect(newIntern.school).toEqual(school);
  expect(newIntern.getSchool()).toEqual(school);
  expect(newIntern.getRole()).toEqual("Intern");
});
