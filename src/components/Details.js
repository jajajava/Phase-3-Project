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


console.log(getById.bid[getById.bid.length - 1])

    return(
        <div>
            <button onClick={takeMeHome}>Home</button>
            <h1>{getById.title}</h1>
            <h2>{getById.artist}</h2>
            <img src={getById.image} ></img>
            {getById.bid !== [] ? null : <h1>Current bid: {getById.bid[getById.bid.length - 1]}</h1>}
            <p>{getById.description}</p>
            

        </div>
    )
}


export default Details