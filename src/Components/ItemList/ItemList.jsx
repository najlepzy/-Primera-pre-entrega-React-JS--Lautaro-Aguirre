import React from "react";
import Item from "../Item/Item";

const ItemList = ({ listaProductos }) => {
  return (
      <div>
      {listaProductos.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
    
  );
};

export default ItemList;
