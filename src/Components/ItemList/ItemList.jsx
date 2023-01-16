import React from "react";
import Item from "../Item/Item";
import "../Item/Item.css";


const ItemList = ({ data = [] }) => {
  return (
    <div className="ItemList">
      data.map(productos => <Item key={productos.id} info={productos} />)
    </div>
  );
};

export default ItemList;
