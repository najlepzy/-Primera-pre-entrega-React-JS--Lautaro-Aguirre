import React from "react";
import Item from "../Item/Item";

const ItemList = ({ Productos }) => {
  return (
      <div className="ItemList">
          
      {Productos.map((Prod) => (
        <Item key={Prod.id} Prod={Prod} />
      ))}
    </div>
    
  );
};

export default ItemList;
