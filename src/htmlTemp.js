const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${manager.getName()}</h5>
                  <p class="card-text">${manager.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${manager.getId()} </li>
                  <li class="list-group-item">Email: ${manager.getEmail()} </li>
                  <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
                </ul>
              </div>
          </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
    <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${engineer.getName()}</h5>
                  <p class="card-text">${engineer.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${engineer.getId()}</li>
                  <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                  <li class="list-group-item">Github username: ${engineer.getGithub()}</li>
                </ul>
              </div>
          </div>
        `;
    };

    const generateIntern = intern => {
        return `
    <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${intern.getName()}</h5>
                <p class="card-text">${intern.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${intern.getId()}</li>
                  <li class="list-group-item">Email: ${intern.getEmail()}</li>
                  <li class="list-group-item">Intern's School: ${intern.getSchool()}</li>
                </ul>
              </div>
          </div>
        `;
    };

    const htmlArr = [];

    htmlArr.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager)));
    htmlArr.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join(''));
    htmlArr.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join(''));
    
return htmlArr.join('');



}