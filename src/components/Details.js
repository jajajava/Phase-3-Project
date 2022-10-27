import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";


function Details({photoId}){
    
    const [getById, setGetById] = useState({})
    useEffect(()=> {
        fetch(`http://localhost:4000/thing/${photoId}`)
        .then(res => res.json())
        .then(res => setGetById(res))
    },[])

    const navigate = useNavigate()
    

    function takeMeHome(){
        navigate('/')
    }

    return(
        <div>
            <button onClick={takeMeHome}>Home</button>
            <img src={getById.image} ></img>
            <h1>{getById.name}</h1>
            <h1>{getById.title}</h1>
            <h1>{getById.medium}</h1>
            <h1>{getById.price}</h1>
            <h1>{getById.contact}</h1>
            <h1>{getById.description}</h1>
            <h1><span style={{color: "purple"}}>{getById.tags.join(', ')}</span></h1>

        </div>
    )
}


export default Details