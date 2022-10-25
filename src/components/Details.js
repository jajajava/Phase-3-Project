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

        </div>
    )
}


export default Details