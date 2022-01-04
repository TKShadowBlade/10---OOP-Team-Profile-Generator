const teamCreate = newTeam => {

    const managerCreate = manager => {
        return `
        <div class="card employee-card">
    <div class="header">
        <h2 class="title">${manager.getName()}</h2>
        <h3 class="title">${manager.getRole()}</h3>
    </div>
    <div class="body">
        <ul class="group-list">
            <li class="group-list-item">ID: ${manager.getId()}</li>
            <li class="group-list-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="group-list-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
                </div>`;
    };

    const engineerCreate = engineer => {
        return `
        <div class="card employee-card">
        <div class="header">
            <h2 class="title">${engineer.getName()}</h2>
            <h3 class="title">${engineer.getRole()}</h3>
        </div>
        <div class="body">
            <ul class="group-list">
                <li class="group-list-item">${engineer.getId()}</li>
                <li class="group-list-item">Email: <a href="mailto:${engineer.getEmail()}>${engineer.getEmail()}</a></li>
                <li class="group-list-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>`;
    };

    const internCreate = intern => {
        return `
        <div class="card employee-card">
        <div class="header">
            <h2 class="title">${intern.getName()}</h2>
            <h3 class="title">${intern.getRole()}</h3>
        </div>
        <div class="body">
            <ul class="group-list">
                <li class="group-list-item">${intern.getId()}</li>
                <li class="group-list-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="group-list-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`;
    };

    const webpage = [];

    webpage.push(newTeam
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => managerCreate(manager))
    );
    webpage.push(newTeam
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerCreate(engineer))
        .join("")
    );
    webpage.push(newTeam
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => internCreate(intern))
        .join("")
    );

    return webpage.join("");
}

module.exports = newTeam => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Creator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 heading">
                <h1 class="text-center">My Created Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${teamCreate(newTeam)}
            </div>
        </div>
    </div>
</body>
</html>`;
};