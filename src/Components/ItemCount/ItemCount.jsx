import '../ItemCount/ItemCount.css'
import React, { useState} from 'react';

export const ItemCount = () => {
    const [count, setCount] = useState(1)
    return (
        <div className='counter'>
            <button></button>
            <span></span>
            <button></button>
            <div>
                <button>Agregar al carrito</button>
            </div>


        </div>
    )

}

export default ItemCount