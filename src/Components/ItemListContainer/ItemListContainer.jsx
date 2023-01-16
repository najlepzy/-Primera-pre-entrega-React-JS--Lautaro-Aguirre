import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";

const productos = [
  {
    id: "1",
    name: "Evolution",
    price: 85000,
    category: "sillones",
    image: "https://facyca.com.ar/uploads/imagenes/evolution_428310589.jpg",
    stock: 25,
    description:
      "Sillon con estructura metalica desarmable, asientos y respaldos de alta densidad, móviles, patas de metal cromadas o pintadas, tapiceria a elección, anti derrame, cabezal móvil, cierras YKK, resortes encapsulados, chaise longe, esquineros, arrimes",
  },
  {
    id: "2",
    name: "Rosellini",
    price: 70000,
    category: "sillones",
    image: "https://facyca.com.ar/uploads/imagenes/rosellini_451395783.jpeg",
    stock: 5,
    description:
      "Sillon confortable con estructura metalica, asientos y respaldos de alta densidad, patas de metal cromadas o pintadas, color, tapiceria a elección, cierres YKK, cabezal móvil y asientos extensibles",
  },
];



export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };
  return (
    <>
      <title greeting={texto} /> 
      <ItemCount initial={3} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer

