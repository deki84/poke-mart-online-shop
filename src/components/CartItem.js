import styled from "styled-components";

export default function CartItem({ name, itemImage, onRemoveCartItem }) {
  return (
    <Li>
      <img src={itemImage} alt="" />
      {name}
      <button className="deleteButton" onClick={() => onRemoveCartItem(name)}>
        Remove Item
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

  {name} {
    color: #324F66;
    text-transform: uppercase;
  }

  .deleteButton {
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
