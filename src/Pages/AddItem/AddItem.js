import { getAuth } from 'firebase/auth';
import React from 'react'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        toast("Successfully added");
        console.log(data)
        const url = 'https://calm-plains-80222.herokuapp.com/item'
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

                <input className='mb-2 field-control' placeholder='item name' type='text' {...register("name", { required: true, maxLength: 50 })} />

                <input className='mb-2 field-control'  defaultValue={user?.email} type='email' readOnly {...register("email", { required: true, maxLength: 50 })} />

                <textarea className='mb-2 field-control' placeholder='Descriptions' {...register("description")} />

                <input className='mb-2 field-control' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2 field-control' placeholder='quantity' type="number" {...register("quantity")} />
                <input className='mb-2 field-control' placeholder='supplier' type="text" {...register("supplier")} />

                <input className='mb-2 field-control' placeholder='Photourl' type="text" {...register("img")} />

                <input className='addItemBtn' type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddItem;