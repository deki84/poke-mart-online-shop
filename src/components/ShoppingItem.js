import { useEffect, useState } from "react";

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
        }
        setItemDetails(newItemObject);
      } );
  }, [])
  
  return <li><img src={itemDetails.image} alt="" />{itemDetails.name} {itemDetails.cost}</li>;
}
