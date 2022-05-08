import React, { useState } from 'react';

const MyItemDetails = ({myItem}) => {
    const { _id, name, price, quantity, img } = myItem;

    const[myItems, setMyItems] = useState();


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
                const remaining = myItems.filter(myItem => myItem._id !== id)
                console.log(remaining)
                setMyItems(remaining); 
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
                         <img width= "30px" src={img} alt="" />
                    </div>
                     
                    <div className="col-md-3">
                         <button onClick={() => handleDelete(myItem._id)} className='btn btn-danger'>Delete</button> 
                    </div>
                </div>

                 
            </div>
        </div>
    );
};

export default MyItemDetails;