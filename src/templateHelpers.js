//generate a card by class
function card(obj) {
  //figure out how to determine type
  let dynamicInfo =
    obj.getRole() === "Manager"
      ? obj.getOfficeNumber()
      : obj.getRole() === "Engineer"
      ? obj.getGithub()
      : obj.getSchool();
  let prefix =
    obj.getRole() === "Manager"
      ? "Office Number: "
      : obj.getRole() === "Engineer"
      ? "Github: "
      : "School: ";

  function hasgh() {
    if (prefix === "Github: ") {
      return (
        '<a href="https://github.com/' +
        dynamicInfo +
        '">' +
        dynamicInfo +
        "</a>"
      );
    }
    return dynamicInfo;
  }
  return `
  <div class="card baseCard">
    <div class="card-header bg-primary text-white">
      <h3 class="card-title">${obj.getName()}</h3>
      <h4 class="card-title"><i class="fas ${obj.getIcon()} mr-3"></i>${obj.getRole()}</h4>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group">
        <li class="list-group-item">ID: ${obj.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
        <li class="list-group-item">${prefix}${hasgh()}</li>
      </ul>
    </div>
  </div>
  `;
}

//row for manager
function makeManagerRow(manager) {
  return `
  <div id="managerRow" class="row justify-content-center">
    ${card(manager)}
  </div>
  `;
}

//row for Engineers
function makeEngineerRow(arr) {
  return `
  <div id="engineerRow" class="row justify-content-center">
    ${arr.map((eng) => eng !== "," && card(eng))}
  </div>
  `;
}

//row for Interns
function makeInternRow(arr) {
  return `
  <div id="internRow" class="row justify-content-center">
    ${arr.map((intern) => intern !== "," && card(intern))}
  </div>
  `;
}

//full page layout
function makePage(manager, engineers, interns) {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="HW10" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="rendered.css" />
    <title>Team Profile Builder</title>
  </head>

  <div class="jumbotron jumbotron-fluid bg-danger text-white text-center">
    <div class="container">
      <h1 class="display-4">My Team</h1>
    </div>
  </div>

  <body>
    <main class="d-flex min-vh-100">
      <div class="container">
        ${makeManagerRow(manager)}
        ${makeEngineerRow(engineers)}
        ${makeInternRow(interns)}
      </div>
    </main>
  </body>

  </html>
  `;
}

module.exports = { makePage };
