import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    const { name, price, description, supplier, quantity, img } = item;
    return (
        <div className='item-container'>
               <h3>{name}</h3>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='item-info'> 
                <p><span>Quantity</span>: {quantity}</p>
                <p><span>Price</span>: ${price}</p>
                <p><span>Supplier</span>: {supplier}</p>
                <p> <span>Description: </span>{description}</p>
                <div className='update-btn'>
                    <button>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;