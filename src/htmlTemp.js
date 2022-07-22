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

    
}