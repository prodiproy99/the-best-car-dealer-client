import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemDetails from '../MyItemDetails/MyItemDetails';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]); 
    useEffect(() => {
        const getItem = async () => {
            const email = user?.email;
            console.log(email);
            const url = `https://calm-plains-80222.herokuapp.com/item?email=${email}`;
            try {

                const { data } = await axios.get(url);
                const myItem = data?.filter(stock => stock?.email === user?.email)
                console.log(myItem)
                console.log(data)
                setMyItems(myItem);

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
                myItems.map(myItem => <MyItemDetails 
                key={myItem._id}
                myItem = {myItem}
                
                > </MyItemDetails>)
            }
        </div>
    );
};

export default MyItems;