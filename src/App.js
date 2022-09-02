import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import CartItem from "./components/CartItem";
import ShoppingItem from "./components/ShoppingItem";

function App() {
  const ApiUrl = "https://pokeapi.co/api/v2/item/";
  const [shopInventory, setShopInventory] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  function addToCart(newItem){
    const filteredShoppingItem = shoppingCart.find(item => item.name === newItem.name)
    if(!filteredShoppingItem) {
      return setShoppingCart([newItem, ...shoppingCart]);
  }
}

  console.log(shoppingCart);

  useEffect(() => {
    fetch(ApiUrl)
      .then((response) => response.json())
      .then((data) => setShopInventory(data.results));
  }, []);

  return (
    <Div className="App">
      <h1>Poke Mart Online Shop</h1>
      <h2>Shopping Cart</h2>
      <ul>
        {shoppingCart.map((item) => {
          return <CartItem key={item.name} name={item.name} cost={item.cost} itemImage={item.image}/>
        })}
      </ul>
      <h2>Search Items</h2>
      <ul>
        {shopInventory.map((item) => {
          return <ShoppingItem key={item.name} url={item.url} onAddToCart={addToCart} />;
        })}
      </ul>
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;

  h1 {
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    padding: 0;
    margin: 0 auto;
    justify-items: center;
  }
`;

export default App;
