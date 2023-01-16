import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";
const Item = ({ Prod }) => {
  const { id, img, name, description, price, stock, hashtags } = Prod;
  const navegar = useNavigate();
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-descrip">{description}</p>
        <p className="card-price">${price}</p>
        <p className="card-stock">stock: {stock}</p>
        {hashtags?.map((frase, index) => (
          <p className="card-text" key={index}>
            {frase}
          </p>
        ))}
      </div>
      <div className="btn">
        <button className="btnedit" onClick={() => navegar(`/item/${id}`)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Item;
