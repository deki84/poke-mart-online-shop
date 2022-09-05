import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import CartItem from "./components/CartItem";
import ShoppingItem from "./components/ShoppingItem";
import { Router, Route, Link, Routes } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const ApiUrl = "https://pokeapi.co/api/v2/item/";
  const [shopInventory, setShopInventory] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  function addToCart(newItem) {
    const filteredShoppingItem = shoppingCart.find(
      (item) => item.name === newItem.name
    );
    if (filteredShoppingItem) {
      return;
    } else {
      setShoppingCart([newItem, ...shoppingCart]);
    }
    console.log(shoppingCart);
  }

  function removeCartItem(name) {
    setShoppingCart(shoppingCart.filter((item) => item.name !== name));
  }

  useEffect(() => {
    fetch(ApiUrl)
      .then((response) => response.json())
      .then((data) => setShopInventory(data.results));
  }, []);

  return (
    <Div className="App">
      <h1>Poké Mart Online Shop</h1>
      <Routes>
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              removeCartItem={removeCartItem}
              shoppingCart={shoppingCart}
            />
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Link to="/shopping-cart">Go to cart</Link>
              <h2>Search Items</h2>
              <ul className="shoppingInventory">
                {shopInventory.map((item) => {
                  return (
                    <ShoppingItem
                      key={item.name}
                      url={item.url}
                      onAddToCart={addToCart}
                    />
                  );
                })}
              </ul>
            </>
          }
        ></Route>
      </Routes>
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: monospace;

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    margin-bottom: 3%;
  }

  .shoppingInventory {
    background-color: lightgrey;
    margin: 5%;
    margin-top: 0;
    padding: 1%;
  }

  .shoppingCart {
    margin-left: 5%;
    margin-right: 5%;
    padding: 1%;
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
