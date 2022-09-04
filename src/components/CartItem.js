import styled from "styled-components";

export default function CartItem({ name, itemImage, cost, onRemoveCartItem }) {
  return (
    <Li>
      <img src={itemImage} alt="" />
      {name}{" "}
      <button className="deleteButton" onClick={() => onRemoveCartItem(name)}>
        Remove Item
      </button>
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
