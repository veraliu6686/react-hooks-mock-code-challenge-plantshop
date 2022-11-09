import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( ) {

  const [plants, setPlants] = useState ([])
  const [text, setText] = useState ('')

  useEffect( () =>{
    fetch ( 'http://localhost:6001/plants')
      .then ( r => r.json())
      .then ( plantsData => setPlants(plantsData))
  },[])

  const searchPlant = plants.filter( plant =>{
      return (plant.name.toLowerCase().includes(text.toLowerCase()))
    })

  const addNewPlant = ( newPlant)=>{
    setPlants ([... plants, newPlant])
  }
  
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search text = {text} setText = {setText}/>
      <PlantList plants = {searchPlant}/>
    </main>
  );
}

export default PlantPage;
