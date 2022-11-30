import React, { useState } from "react";

function Pet({pet, onAdoptPet}) {

  const {id, name, type, age, weight, gender, isAdopted} = pet

  const [petAdopted, setIsAdopted] = useState(isAdopted);

  function handleClick(){
    onAdoptPet(id);
    setIsAdopted(petAdopted => petAdopted = true);
    
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "male" ? "♂" : "♀"}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {petAdopted ? <button className="ui disabled button">Already adopted</button> :
        <button className="ui primary button" onClick={handleClick}>Adopt pet</button>
        }
      </div>
    </div>
  );
}

export default Pet;
