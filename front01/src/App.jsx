import { useState } from 'react'

import './App.css'
import axios from 'axios';
import { useEffect } from 'react';


function App() {

  const [cars , setCars] = useState([]);

  useEffect(() =>{


    axios.get(`/api/cars`)
    .then((result)=> {
      setCars(result.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, []);

  

  return(

    <div>
    <h1>just cars fetch</h1>

    {cars.map((car , index) => {
      return(
      <div className="showCars" key={car.id}>
        <h3> {car.id} : {car.name}</h3>
        <p>₹{car.money}</p>
      </div>
      )
    })}

    </div>
  )
}

export default App
