import React, {useState} from "react";


function Item({ name, category }) {
  const [inCart, setInCart] = useState(false); 
  const isInCart = inCart ? "in-cart" : "";
  const addOrRemove = inCart ? "Remove from Cart" : "Add to Cart"
  function setCart(){
    setInCart((inCart) => !inCart)
  }
  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {setCart}>{addOrRemove}</button>
    </li>
  );
}

export default Item;
