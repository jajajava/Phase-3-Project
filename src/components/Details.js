import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";


function Details({photoId, getById, setGetById}){
    
    
    useEffect(()=> {
        fetch(`http://localhost:4000/thing/${photoId}`)
        .then(res => res.json())
        .then(res => setGetById(res))
    },[])

    const navigate = useNavigate()
    

    function takeMeHome(e){
        e.preventDefault()
        navigate('/')
    }

    function toProfile(e){
        e.preventDefault()
        navigate('/profile')
    }

    //Tags show up only when loaded in
    let tags = getById.tags ? getById.tags.join(', ') : null

    return(
        <div>
            <button onClick={takeMeHome}>Home</button>
            <img src={getById.image} ></img>
            <h1><a onClick={toProfile}> {getById.name}</a> </h1>
            <h1>{getById.title}</h1>
            <h1>{getById.medium}</h1>
            <h1>${getById.price}</h1>
            <h1>{getById.contact}</h1>
            <h1>{getById.description}</h1>
            <h1>Tags: <span style={{color: "purple"}}>{tags}</span></h1>

        </div>
    )
}


export default Details