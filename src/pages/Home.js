import styled from "styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  return (
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
  );
}
const Div = styled.div`
  .shoppingInventory {
    background-color: lightgrey;
    margin: 5%;
    margin-top: 0;
    padding: 1%;
  }
`;
