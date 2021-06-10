// TODO helper functions to clean up & for bonus


window.addEventListener('load', () => {

    let astroContainer = document.getElementById('container');

    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then((response) => {
        response.json().then((json) => {
            for (let i = 0; i < json.length; i++) {
                let skillList = '';
                json[i].skills.forEach((skill) => {
                    skillList+= `${skill}, `;
                });
                let astroActive = json[i].active;
                astroContainer.innerHTML+=
                `
                 <div class="astronaut">
                     <div class="bio">
                         <h3>${json[i].firstName} ${json[i].lastName}</h3>
                         <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li >Active: ${json[i].active}</li>
                            <li>Skills: ${skillList.slice(0, skillList.length - 2)}</li>
                        </ul>
                     </div>
                     <img class="avatar" src=${json[i].picture}>
                 </div>
                `;
            }
            
        });
    });
});