import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../FakeApi";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProductos(res));
  }, []);
  console.log(productos);
  return (
    <div>
      <h1 className="ItemListContainer"> {greeting}</h1>
      
    </div>
  );
};

export default ItemListContainer;


