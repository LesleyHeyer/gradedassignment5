// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
     
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[1].name}</li>
               <li>Diameter: ${json[1].diameter}</li>
               <li>Star: ${json[1].star}</li>
               <li>Distance from Earth: ${json[1].distance}</li>
               <li>Number of Moons: ${json[1].moons}</li>
            </ol>
            <img src="${json[1].image}">
            `;
         });
      }); // fetch end     
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");

         if (pilotName.value === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
            alert("All fields required!");
         } else {

            if (Number(pilotName.value) || Number(copilotName.value)){
               alert("invalid input.")
            }
            
            if (!Number(fuelLevel.value) || !Number(cargoMass.value)) {
               alert("Invalid input, must be a number");
            }
         } //conditionals for form

            let faultyItems = document.getElementById("faultyItems");
            let pilotStatus = document.getElementById("pilotStatus");
            let copilotStatus = document.getElementById("copilotStatus");
            let fuelStatus = document.getElementById("fuelStatus");
            let cargoStatus = document.getElementById("cargoStatus");

            if (fuelLevel.value <= 10000 || cargoMass.value >= 10000) {
               faultyItems.style.visibility = "visible";

               let launchStatus = document.getElementById("launchStatus");

               launchStatus.style.color = "red";
               launchStatus.innerHTML = `Shuttle not ready for launch`;

               pilotStatus.innerHTML = `
                  <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch</li>
               `;

               copilotStatus.innerHTML = `
               <li id="copilotStatus">Co-Pilot ${copilotName.value} is ready for launch</li>
               `;

                  if (fuelLevel.value <= 10000) {
                  fuelStatus.innerHTML = `
                     <li id="fuelStatus">Fuel level too low for launch</li>
                  `;
                  }

                  if (cargoMass.value >= 10000) {
                     cargoStatus.innerHTML = `
                     <li id="cargoStatus">Cargo mass too high for launch</li>
                  `;
                  }

                
            } else {

               launchStatus.style.color = "green";

               launchStatus.innerHTML = `
               Shuttle is ready for launch
               `;

            }//shuttle status conditionals

   }); //end form.addEventListener
}); //end window.addEventListener

