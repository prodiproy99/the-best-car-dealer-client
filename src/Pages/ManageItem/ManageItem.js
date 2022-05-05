import React, { useState } from 'react';  
const ManageItem = ({ manageItem }) => {
    const[manageItems, setManageItems] = useState();
    const { _id, name, price, description, supplier, quantity, img } = manageItem;

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure?')
        if(proceed){
            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: 'DELETE'
            }) 
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = manageItems.filter(manageItem => manageItem._id !== id)
                console.log(remaining)
                setManageItems(remaining);
            })
        }
    }


    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3 border-b-2">
                        <p><span>Name:</span> {name}</p>
                        <p><span>Name:</span> {_id}</p>
                    </div>
                    <div className="col-md-2">
                        <p><span>Quantity:</span> {quantity}</p>
                    </div>
                    <div className="col-md-2">
                        <p><span>Price:</span> {price}</p>
                    </div>
                    <div className="col-md-2">
                        <p><span>Supplier:</span> {supplier}</p>
                    </div>
                     
                    <div className="col-md-3">
                         <button onClick={() => handleDelete(manageItem._id)} className='btn btn-danger'>Delete</button> 
                    </div>
                </div>

                 
            </div>
        </div>
    );
};

export default ManageItem;