import React,{ useState } from "react";

function Item({ name, category }) {

  const [addItem, setAddItem]= useState(true);
  //const [addClassName,setClassName]= useState(true);

  const itemClass = addItem ? "" : "in-cart";
  

  function addingItems(e){
      setAddItem((addItem) =>!addItem);
  }




  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addingItems} >{addItem ?"Add To Cart":"Remove"}</button>
    </li>
  );
}

export default Item;
