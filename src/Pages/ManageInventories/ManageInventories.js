import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../Hooks/useManageItems';
import ManageItem from '../ManageItem/ManageItem';

const ManageInventories = () => {
    const [manageItems] = useItems([])
    const navigate = useNavigate()
    const handleAddItem = () =>{
        navigate('/addItem')
    }
    return (
        <div className='container mx-auto mt-5 justify-center'>

            {
                manageItems.map(manageItem => <ManageItem
                    key={manageItem._id}
                    manageItem={manageItem}

                ></ManageItem>)
            }

            <div className="w-100 mx-auto mt-5 justify-center">
                <button onClick={handleAddItem} className='text-center d-flex btn btn-success'>Add New Item</button>
            </div>

        </div>
    );
};

export default ManageInventories;