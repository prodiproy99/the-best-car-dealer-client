import React, { useState } from 'react';  

const ManageItem = ({ manageItem }) => {
    const { _id, name, price, supplier, quantity } = manageItem;
    const[manageItems, setManageItems] = useState();

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure?')
        if(proceed){
            window.location.reload();
            const url = `https://calm-plains-80222.herokuapp.com/item/${id}`
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