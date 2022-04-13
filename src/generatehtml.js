const generateHtml = (employees) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/3dfa849c39.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./src/style.css"/>
        <title>My Team</title>
    </head>
    <body>
    <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                ${
                    employees.map((employee) => {
                        return generateCard(employee);
                    })
                }
            </div>
        </div>        
    </body>
    </html>`
}
const generateCard = (employee) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${employee.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item">E-mail: ${employee.email}</li>
        ${generateLastItem(employee)}
    </ul>
  </div>`
}
const generateLastItem = (employee) => {
    if (employee.getRole() == 'Manager') {
        return `<li class="list-group-item">Office Num: ${employee.officeNum}</li>
        <li id="rolee" class="fa-solid fa-mug-hot"> MANAGER</li>`
    }
    else if (employee.getRole() == 'Engineer') {
        return `<li class="list-group-item">Github: ${employee.github}</li>
        <li id="rolee" class="fa-solid fa-laptop-file"> ENGINEER</i>`
    }
    else {
        return `<li class="list-group-item">School: ${employee.school}</li>
        <li id="rolee" class="fa-solid fa-graduation-cap"> INTERN</i>`
    }
    
}

module.exports = generateHtml