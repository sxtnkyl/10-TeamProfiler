const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  geRole() {
    return "Intern";
  }
}

// class Intern {
//   constructor(name, id, email, school) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.school = school;
//   }

//   getName() {
//     return this.name;
//   }
//   getId() {
//     return this.id;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getSchool() {
//     return this.school;
//   }
//   geRole() {
//     return "Intern";
//   }
// }

module.exports = Intern;
