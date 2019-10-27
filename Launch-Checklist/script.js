//Fetches mission info 
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
       response.json().then(function(json){
          const div=document.getElementById("missionTarget");
          let index = 4;
          div["className"] = "Mission Destination";
          div.innerHTML=
       `<h2>Mission Destination</h2>
       <ol>
        <li>Name: ${json[index].name}</li>
        <li>Diameter: ${json[index].diameter}</li>
        <li>Star: ${json[index].star}</li>
        <li>Distance from Earth: ${json[index].distance}</li>
        <li>Number of Moons: ${json[index].moons}</li>
       </ol>
      <img src="${json[index].image}"></img>`
       })
 
 
    let form = document.querySelector("form");
     form.addEventListener("submit", function(event){
        event.preventDefault()
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
 
 //Making sure the user fills out all fields
         if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
             alert("All fields are required!");
             event.preventDefault();
         
 
 
 //Making sure the information the user inputs is valid
         } else if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true || isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false ){
             alert("Make sure to enter valid information for each field!");
             event.preventDefault();
         
 
 //Checking if the fuel level is high enough for launch
         } else if (Number(fuelLevelInput.value) < 10000) {
          document.getElementById("faultyItems").style.visibility = "visible";
          document.getElementById("fuelStatus").innerHTML = "Fuel level too low to launch";
          document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
          document.getElementById("launchStatus").style.color = "red";
          document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
          document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
          event.preventDefault();
 //Checking if the mass is too hight for launch
          } else if (Number(cargoMassInput.value) > 10000) {
          document.getElementById("faultyItems").style.visibility = "visible";
          document.getElementById("cargoStatus").innerHTML = "Too much mass for launch";
          document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
          document.getElementById("launchStatus").style.color = "red";
          document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
          document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
          event.preventDefault();
 //Shuttle ready for launch 
          } else {
          document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
          document.getElementById("launchStatus").style.color = "green";
          document.getElementById("faultyItems").style.visibility = "visible";
          document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
          document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
          event.preventDefault();
          }
       })
    })
 });