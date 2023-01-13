import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../FakeApi";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const [Productos, setProductos] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProductos(res));
  }, []);
  console.log(Productos);
  return (
    <div>
      <h1 className="ItemListContainer"> {greeting}</h1>
        <ItemList Productos={Productos} />
      </div>
  );
};

export default ItemListContainer;


