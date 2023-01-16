import '../Item/Item.css'

import React from 'react'

const Item = ({ info }) => {
  return (
    <div className='flexcontainer'>
      <div className="card">
        <a href="" className="productos">
          <img src={info.image} alt="" className="card-img-top" />
          <p className="card-text">{info.name}</p>
        </a>
        <p className="card-descrip">{info.description}</p>
      </div>
    </div>
  );
}

export default Item;
