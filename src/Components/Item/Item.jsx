import React from "react";
import { useNavigate } from "react-router-dom";
const Item = ({ Prod }) => {
  const { id, img, name, description, price, stock, hashtags } = Prod;
  const navegar = useNavigate();
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <p className="card-text">stock: {stock}</p>
        {hashtags?.map((frase, index) => (
          <p className="card-text" key={index}>
            {frase}
          </p>
        ))}
      </div>

      <button
        className="btn btn-primary"
        onClick={() => navegar(`/item/${id}`)}
      >
        Ver más
      </button>
    </div>
  );
};

export default Item;
