import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  // useEffect(()=>{
  //   fetch("http://localhost:3001/pets")
  //   .then(resp => resp.json())
  //   .then(pets => setPets(pets))
  // },[])

  function updateFilter(filterType){
    setFilters({ type: filterType});
  }
  console.log(filters)

  function findPets(){
    if(filters.type === "all"){
      fetch("http://localhost:3001/pets")
      .then(resp => resp.json())
      .then(petsData => setPets(petsData));
    }else{
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then(resp => resp.json())
      .then(petsData => setPets(petsData))
    }
  }

  function adoptPet(petId){
    const adoptedPet = pets.find(pet => pet.id === petId);
    adoptedPet.isAdopted = true;
      console.log(adoptedPet);
   
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={updateFilter} onFindPetsClick={findPets}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={adoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
