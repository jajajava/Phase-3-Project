import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo"


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
        <div id="detailsAll">
            <div id="detailsHome" onClick={takeMeHome}><Logo/></div>
            <h1 id="detailsTitle">{getById.title}</h1>
            <img id="detailsImage" src={getById.image} height="600" width="600"></img>
            <div id="detailsArtist"><h1 onClick={toProfile}> {getById.name}</h1></div>
            <h1 id="detailsTitle">{getById.title}</h1>
            <h1 id="detailsMedium">{getById.medium}</h1>
            <h1 id="detailsPrice">${getById.price}</h1>
            <h1 id="detailsContact">{getById.contact}</h1>
            <h1 id="detailsDescription">{getById.description}</h1>
            <h1 id="detailsTags">Tags: <span style={{color: "#ff0000"}}>{tags}</span></h1>

        </div>
    )
}


export default Details