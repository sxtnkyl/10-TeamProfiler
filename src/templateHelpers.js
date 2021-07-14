//generate a card by class
function card(obj) {
  //figure out how to determine type
  let dynamicInfo =
    obj.getRole === "Manager"
      ? obj.getOfficeNumber()
      : obj.getRole === "Engineer"
      ? obj.getGithub()
      : obj.getSchool();

  return `
  <div class="card text-center">
    <h4>${obj.getName()}</h4>
    <i class="fa ${obj.getIcon()}" />
    <div>${obj.getId()}</div>
    <div>${obj.getEmail()}</div>
    <div>${obj.getRole()}</div>
    <div>${dynamicInfo}</div>
  </div>
  `;
}

//row for manager
function makeManagerRow(manager) {
  return `
  <div id="managerRow" class="row">
    ${card(manager)}
  </div>
  `;
}

//row for Engineers
function makeEngineerRow(arr) {
  return `
  <div id="engineerRow" class="row">
    ${arr.map((eng) => card(eng))}
  </div>
  `;
}

//row for Interns
function makeInternRow(arr) {
  return `
  <div id="internRow" class="row">
    ${arr.map((intern) => card(intern))}
  </div>
  `;
}

//full page layout
export function makePage(manager, engineers, interns) {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="HW10" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <title>Team Profile Builder</title>
  </head>

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
