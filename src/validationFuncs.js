//TODO: inquirer validate property return true if valid
//use some regex
class Validators {
  name(str) {
    if (str !== "") true;
    return "A name is required";
  }
  id(str) {
    const check = str.match(/^[0-9]*$/);
  }
  email(str) {}
  number(str) {}
  github(str) {}
  school(str) {}
}

module.exports = Validators;
