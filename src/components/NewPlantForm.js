import React,{useState} from "react";

function NewPlantForm({addNewPlant}) {

  const [formData, setFormData] = useState ({
    name : "",
    image : ""  ,
    price : 0
  })
// console.log (formData)
  // const [nameData, setNameData] = useState("")
  // const [imageData, setImageData] = useState("")
  // const [priceData, setPriceData] = useState(0)

  const handleSubmit = (e) =>{
    e.preventDefault()
    // const newPlant = {
    //   name : nameData,
    //   image : imageData,
    //   price : priceData
    // }
    fetch ( 'http://localhost:6001/plants',{
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(newPlant)
      body: JSON.stringify(formData)
      })
      .then ( r => r.json())
      // .then (addNewPlant(newPlant))
      .then (addNewPlant(formData))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        {/* <input type="text" name="name" placeholder="Plant name" onChange={e=>{setNameData(e.target.value)}} />
        <input type="text" name="image" placeholder="Image URL" onChange={e=>{setImageData(e.target.value)}} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={e=>{setPriceData(e.target.value)}} /> */}
        <input type="text" name="name" placeholder="Plant name" onChange={e=>{setFormData({...formData, name : e.target.value})}} />
        <input type="text" name="image" placeholder="Image URL" onChange={e=>{setFormData({...formData, image : e.target.value})}} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={e=>{setFormData({...formData, price : e.target.value})}} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
