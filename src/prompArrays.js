//promp

const promptManager = [
  {
    type: "input",
    name: "managerName",
    message: "Enter the manager's name",
  },
  {
    type: "input",
    name: "managerId",
    message: "Enter the manager's ID",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter the manager's email",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter the manager's office number",
  },
];
const promptEngineer = [
  {
    type: "input",
    name: "engineerName",
    message: "Enter the engineer's name",
  },
  {
    type: "input",
    name: "engineerId",
    message: "Enter the engineer's ID",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter the engineer's email",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "Enter the engineer's github username",
  },
];
const promptIntern = [
  {
    type: "input",
    name: "internName",
    message: "Enter the intern's name",
  },
  {
    type: "input",
    name: "internId",
    message: "Enter the intern's ID",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter the intern's email",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter the intern's school",
  },
];

const promptChooseTeam = [
  {
    type: "list",
    name: "chooseTeam",
    massage: "Who would you like to add to your team?",
    choices: ["Engineer", "Intern", "Done"],
  },
];

module.exports = {
  promptManager,
  promptEngineer,
  promptIntern,
  promptChooseTeam,
};
