// TODO: add code here
window.addEventListener('load', function(){
    let container = document.getElementById('container');
    let astronauts = '';
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
        response.json().then(function(teamlist){
            for(let i = 0; i < teamlist.length; i++){
                astronauts += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${teamlist[i].firstName} ${teamlist[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${teamlist[i].hoursInSpace}</li>
                            <li>Active: ${teamlist[i].active}</li>
                            <li>Skills: ${teamlist[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src= ${teamlist[i].picture}>
                </div>
                `
            }
            container.innerHTML = astronauts;
        })
    })
})