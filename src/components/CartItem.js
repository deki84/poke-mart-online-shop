import styled from "styled-components";

export default function CartItem({name, itemImage, cost}) {
    return (
        <Li><img src={itemImage} alt=""/>{name}</Li>
    )
}

const Li = styled.li`
  list-style: none;
  border: 1px solid black;
  padding: 15px;
  width: 120px;
  margin: 5px;
`;