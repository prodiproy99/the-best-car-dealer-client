import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { _id, name, price, description, supplier, quantity, img } = item;
    const navigate = useNavigate();

    const navigateToItemDetails = id =>{
        navigate(`/item/${id}`);
    }
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
                <div>
                    <button className='update-btn' onClick={() => navigateToItemDetails(_id)}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;