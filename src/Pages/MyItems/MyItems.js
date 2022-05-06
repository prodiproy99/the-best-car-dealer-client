import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const getItem = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/item?email=${email}`;
            try {
                const { data } = await axios.get(url)
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getItem()
    }, [user])
    return (
        <div className='w-50 mx-auto'>
            <h2>Your order list:{myItems.length} </h2>
            {
                myItems.map(myItem => <div key={myItem._id}>
                    <p>{myItem.email} : {myItem.name} </p>

                </div>)
            }
        </div>
    );
};

export default MyItems;