import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useItemDetails from '../../Hooks/useItemDetails';
import { toast } from 'react-toastify';
import axios from 'axios';

const ItemDetails = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const { id } = useParams()
    const [item] = useItemDetails(id)
    const [deliver, setDeliver] = useState()
    console.log(item)

 
    const manageInventories = () => {
        navigate('/manageInventories')
    }


    const onSubmit = (data) => {
        const add = async () => {
            const addQuantity =
                parseInt(item.quantity) + parseInt(data.quantity);
            item.quantity = addQuantity;
            setDeliver(item.quantity)

            try {
                const url = `https://calm-plains-80222.herokuapp.com/item/${id}`;
                await axios.put(url, { item });
                // console.log(data);
            } catch (error) {
                toast(error.message);
            }
        };
        add();
        // reset();
    };
    const handleDeliver = async() => { 
         
            const addQuantity = parseInt(item.quantity) - 1;
            item.quantity = addQuantity;
            setDeliver(item.quantity)

            try {
                const url = `https://calm-plains-80222.herokuapp.com/item/${id}`;
                await axios.put(url, { item });
                // console.log(data);
            } catch (error) {
                toast(error.message);
            }
       
        
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
                <p><span>Quantity: </span> {item.quantity}</p>
                <p><span>Supplier: </span> {item.supplier}</p>
                <p><span>Description: </span> {item.description}</p>
                <div className='d-flex justify-between'>
                    <div>
                        <button className='update-btn' onClick={handleDeliver}>Delivered</button>
                    </div>
                    <div>
                        <button onClick={manageInventories} className='update-btn'>Manage Inventories</button>
                    </div>
                </div>
            </div>
            <div className="item-info d-flex">
                <h4> Restok Car:
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                        <input className='mb-2' placeholder='Add quantity' type='number' id='field-control' {...register("quantity", { required: true })} />
                        <input className='addItemBtn' type="submit" value='Increase Quantity' />
                    </form>
                </h4>
            </div>
        </div>
    );
};

export default ItemDetails;