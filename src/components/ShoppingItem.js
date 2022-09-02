import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ShoppingItem({ url, onAddToCart }) {
  const [itemDetails, setItemDetails] = useState({});

  function handleClick(){
    onAddToCart(itemDetails);
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const newItemObject = {
          cost: data.cost,
          image: data.sprites.default,
          name: data.name,
        };
        setItemDetails(newItemObject);
      });
  }, [url]);

  return (
    <Li>
      <img src={itemDetails.image} alt="" />
      {itemDetails.name} {itemDetails.cost}
      <button type='button' onClick={handleClick}>Add Item</button>
    </Li>
  );
}

const Li = styled.li`
  list-style: none;
  border: 1px solid black;
  padding: 15px;
  width: 120px;
  margin: 5px;
`;
