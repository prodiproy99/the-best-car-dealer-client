import React, { useEffect, useState } from 'react';

const useManageItems = () => {
    const [manageItems, setManageItems] = useState([])
    useEffect( () =>{
        const url = `https://calm-plains-80222.herokuapp.com/item` ||  `https://calm-plains-80222.herokuapp.com/stock`
        fetch(url)
        .then(res => res.json())
        .then(data => setManageItems(data))
    },[])
    return [manageItems]
}

export default useManageItems;