import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../Hooks/useItemDetails';

const ItemDetails = () => {
    const  { itemId } = useParams()
    const [item] = useItemDetails(itemId)
    return (
        <div className='item-container w-50 mx-auto mt-5'>
            <h3>{item.name}</h3>
           <div className='img-container'>
           <img src={item.img} alt="" />
           </div>
           <div className='item-info'> 
           <p><span>Id: </span> {item._id}</p> 
            <p><span>Price: </span> {item.price}</p>
            <p><span>Quantity: </span> {item.quantity}</p>
            <p><span>Supplier: </span> {item.supplier}</p>
            <p><span>Description: </span> {item.description}</p>
           </div>

        </div>
    );
};

export default ItemDetails;