
async function logPets() {
const response = await fetch("https://my-json-server.typicode.com/ngendor00t/pets-server/db");
//i used my own link after creating it i fetched the data for the animals.
//i used the modern way for fetching after creating the function pets
    const petData = await response.json();
    console.log(petData.characters);
//after waiting for a responsce via j.son i console logged petdata to see if it exists

    const { characters }   = petData;        
    for (let pet of characters) {
        toAppend.innerHTML += `
    <div class="card">
    <p>${pet.id}</p>
    <h2>${pet.name}</h2>
    <img src=${pet.image} />
    <h2>${pet.votes}</h2>
    </div>
    



    
    
    
   </dv;
    ; `
    // display the fetched to html 
    // i researched this since the for loop and fetch didnt connect to my local host


  }
}

logPets()
//i console logged the pets
 function buttonOnclick(){
    alert(buttonClicked)
 }
 Pets.addEventlistener("click")
