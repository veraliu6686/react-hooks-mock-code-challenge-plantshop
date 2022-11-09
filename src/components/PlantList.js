import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
   const renderPlantCard = plants.map ( plant =>{
    // console.log (plant)
     return <PlantCard key = {plant.id} plant = {plant}/>
   })

  return (
    <ul className="cards">
      {renderPlantCard}
    </ul>
  );
}

export default PlantList;
