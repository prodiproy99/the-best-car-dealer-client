import React from 'react';
import { useForm } from 'react-hook-form';
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:5000/item'
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        
    };

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='mb-5'>Add Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='item name' type='text' id='field-control' {...register("name", { required: true, maxLength: 25 })} />

                <textarea className='mb-2' placeholder='Descriptions' id='field-control' {...register("description")} />

                <input className='mb-2' placeholder='price' type="number" id='field-control' {...register("price")} />
                <input className='mb-2' placeholder='quantity' type="number" id='field-control' {...register("price")} />
                <input className='mb-2' placeholder='supplier' type="text" id='field-control' {...register("price")} />

                <input className='mb-2' placeholder='Photourl' type="text" id='field-control' {...register("img")} />

                <input className='addItemBtn' type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddItem;