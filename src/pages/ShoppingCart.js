import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components/CartItem";

export default function ShoppingCart({ removeCartItem, shoppingCart }) {
  return (
    <>
      <h2>Shopping Cart</h2>

      <Ul>
        {shoppingCart.map((item) => {
          return (
            <CartItem
              key={item.name}
              name={item.name}
              cost={item.cost}
              itemImage={item.image}
              onRemoveCartItem={removeCartItem}
            />
          );
        })}
      </Ul>
      <Link to="/">Back to shop</Link>
    </>
  );
}

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  padding: 0;
  margin: 0 auto;
  justify-items: center;
`;
