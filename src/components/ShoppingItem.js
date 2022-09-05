import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ShoppingItem({ url, onAddToCart }) {
  const [itemDetails, setItemDetails] = useState({});

  function handleClick() {
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
      {itemDetails.name} <br></br> ${itemDetails.cost}
      <button type="button" onClick={handleClick}>
        Add Item
      </button>
    </Li>
  );
}

const Li = styled.li`

  list-style: none;
  border: 2px solid black;
  border-radius: 5px;
  padding: 15px;
  width: 150px;
  margin: 5px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  {itemDetails.image} {
    margin-bottom: 2px;
  }

  {itemDetails.name} {
    color: #324F66;
    text-transform: uppercase;
  }

  button {
    margin-top: 5px;
    font-family: monospace;
    font-weight: bold;
    padding 10px 10px;
    border: none;
    border-radius: 10px;
    background-color: tomato;
    color: white;
  }
`;
