import { useState } from 'react';
import './App.css';

const ApiUrl='https://pokeapi.co/api/v2/item/'

const[shopInventory, setShopInventory]=useState([]);

fetch(ApiUrl)
.then((response)=>response.json())
.then((data)=> setShopInventory(data.results)
.catch((error)=> console.log(error))

 )





function App() {
  
  
  
  return (
    <div className="App">
      <h1>Poke Mart Online Shop</h1>
    </div>
  );
}

export default App;
