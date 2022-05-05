import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItemDetails from '../../Hooks/useItemDetails';

const ItemDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [item] = useItemDetails(id)
    const [delivered, setDelivered] = useState(5);
    const [stock, setStock] = useState(0)


    const handleQuantity = () => {
        setDelivered(delivered - 1);
        if (delivered <= 0) {
            setDelivered(0);
        }
    }

    const handleIncreaseQuantity = (e) => {
        e.preventDefault();
        const number = e.target.number.value;
        const newStock = parseInt(number);
        console.log(newStock);
        setStock(newStock);

    }

    const manageInventories = () =>{
        navigate ('/manageInventories')
    }


    return (
        <div className='item-container w-50 mx-auto mt-5'>
            <h3>{item.name}</h3>
            <div className='img-container'>
                <img src={item.img} alt="" />
            </div>
            <div className='item-info'>
                <p><span>Id: </span> {item._id}</p>
                <p><span>Price: </span> {item.price}</p>
                <p><span>Quantity: </span> {delivered}</p>
                <p><span>Supplier: </span> {item.supplier}</p>
                <p><span>Description: </span> {item.description}</p>
                <div className= 'd-flex justify-between'>
                    <div>
                        <button className='update-btn' onClick={handleQuantity}>Delivered</button>
                    </div>
                    <div>
                        <button onClick={manageInventories} className='update-btn'>Manage Inventories</button>
                    </div>
                </div>
            </div>
            <div className="item-info d-flex">
                <h4> Restok Car: <form onSubmit={handleIncreaseQuantity}>
                    <input className='w-10 bg-light border-0 rounded' placeholder='0' type="text" name='number' /> <button className='update-btn ms-3'>Increase quantity</button>
                </form>
                </h4>
            </div>
        </div>
    );
};

export default ItemDetails;