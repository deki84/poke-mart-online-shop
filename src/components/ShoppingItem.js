import { useEffect, useState } from "react";
import styled from "styled-components";
export default function ShoppingItem({ url }) {
  const [itemDetails, setItemDetails] = useState({});

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
  }, []);

  return (
    <Li>
      <img src={itemDetails.image} alt="" />
      {itemDetails.name} {itemDetails.cost}
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
