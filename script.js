
async function logPets() {
const response = await fetch("https://my-json-server.typicode.com/ngendor00t/pets-server/db");
    const petData = await response.json();
    console.log(petData.characters); 
    const { characters }   = petData;        
    for (let pet of characters) {
        toAppend.innerHTML += `
    <div class="card">
    <p>${pet.id}</p>
    <h2>${pet.name}</h2>
    <img src=${pet.image} />
    <h2>${pet.votes}</h2>
    
    
    </div>
    `;    

  }
}

logPets()
