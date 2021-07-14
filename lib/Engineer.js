const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
  getIcon() {
    return "fa-coffee";
  }
}

// class Engineer {
//   constructor(name, id, email, github) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.github = github;
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
//   getGithub() {
//     return this.github;
//   }
//   geRole() {
//     return "Engineer";
//   }
// }

module.exports = Engineer;
