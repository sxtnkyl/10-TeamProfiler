const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const templateHelpers = require("./templateHelpers");
const prompts = require("./prompArrays");

//file paths for outputs > dist folder
const distRootDirectory = path.resolve(__dirname, "..");
const distFolder = path.resolve(distRootDirectory, "dist");
const distPath = path.join(distFolder, "rendered.html");

//holds an obj for each member
var manager = "";
var engineers = [];
var interns = [];

//make manager > add team member > chooseTeam break to make HTML

function chooseTeam() {
  inquirer.prompt(prompts.promptChooseTeam).then((choice) => {
    choice.chooseTeam === "Engineer"
      ? addEngineer()
      : choice.chooseTeam === "Intern"
      ? addIntern()
      : compileTeam();
  });
}

function addManager() {
  inquirer.prompt(prompts.promptManager).then((res) => {
    const mng = new Manager(
      res.managerName,
      res.managerId,
      res.managerEmail,
      res.officeNumber
    );
    manager = mng;
    chooseTeam();
  });
}

function addEngineer() {
  inquirer.prompt(prompts.promptEngineer).then((res) => {
    const engineer = new Engineer(
      res.engineerName,
      res.engineerId,
      res.engineerEmail,
      res.engineerGithub
    );
    engineers.push(engineer);
    chooseTeam();
  });
}
function addIntern() {
  inquirer.prompt(prompts.promptIntern).then((res) => {
    const intern = new Intern(
      res.internName,
      res.internId,
      res.internEmail,
      res.internSchool
    );
    interns.push(intern);
    chooseTeam();
  });
}

function compileTeam() {
  //compile teamList into HTML
  let html = templateHelpers.makePage(manager, engineers, interns);
  //write to file
  fs.writeFileSync(distPath, html, "utf-8");
}

function init() {
  addManager();
}

init();
