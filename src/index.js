const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const templateHelpers = require('./templateHelpers')
const {promptManager, promptEngineer, prompIntern} = require("./prompArrays")

const distDirectory;
const distPath;
