import { useEffect, useState } from "react"

const useItemDetails = (id) =>{
    const [item, setItem] = useState({})
    useEffect( () =>{
        const url = `https://calm-plains-80222.herokuapp.com/item/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    },[id])
    return [item]
}

export default useItemDetails;