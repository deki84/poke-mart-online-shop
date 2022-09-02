import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import ShoppingItem from "./components/ShoppingItem";

function App() {
  const ApiUrl = "https://pokeapi.co/api/v2/item/";
  const [shopInventory, setShopInventory] = useState([]);

  useEffect(() => {
    fetch(ApiUrl)
      .then((response) => response.json())
      .then((data) => setShopInventory(data.results));
  }, []);

  return (
    <div className="App">
      <h1>Poke Mart Online Shop</h1>
      <ul>
        {shopInventory.map((item) => {
          return <ShoppingItem key={item.name} url={item.url} />;
        })}
      </ul>
    </div>
  );
}

export default App;
