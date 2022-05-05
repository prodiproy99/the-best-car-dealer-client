import React, { useEffect, useState } from 'react';

const useManageItems = () => {
    const [manageItems, setManageItems] = useState([])
    useEffect( () =>{
        const url = `http://localhost:5000/item`
        fetch(url)
        .then(res => res.json())
        .then(data => setManageItems(data))
    },[])
    return [manageItems]
}

export default useManageItems;