import React from 'react';  
const ManageItem = ({ manageItem }) => {
    const { _id, name, price, description, supplier, quantity, img } = manageItem;
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
                         <button className='btn btn-danger'>Delete</button> 
                    </div>
                </div>

                 
            </div>
        </div>
    );
};

export default ManageItem;